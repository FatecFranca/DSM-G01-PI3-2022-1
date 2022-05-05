// importa o model correspondente 
const User = require('../models/User')()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const controller = {}  // objeto vazio 

// Função que será chamada para criar entrada no Glossário
controller.create = async(req, res) => {
    try{
        await User.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

// Função que devolve uma listagem das entradas de glossário já inseridas
controller.retrieve = async (req, res) => {
    try{
        const result = await User.find({})
        // HTTP 200: OK é implícito aqui 
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

// Função que retorna uma unica entrada do glossário, com base no id fornecido
controller.retrieveOne = async (req, res) => {
    try{
        const id = req.params.id
        const result = await User.findById(id)
        
        // Se tivermos um resultado, retornamos status HTTP 200
        if(result) res.send(result)

        // Senão, retornamos HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

controller.update = async (req, res) => {
    try{
        const id = req.body._id
        const result = await User.findByIdAndUpdate(id, req.body)

        // HTTP 204: No content
        if(result) res.status(204).end()

        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }

}

controller.delete = async (req, res) => {
    try{
        const id = req.body._id
        const result = await User.findByIdAndDelete(id)

        if(result) res.status(204).end()

        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

controller.login = async(req, res) => {

    try{
        const user = await User.findOne({email: req.body.email})

        if(!user) {
            res.status(401).end()

        } else {
            bcrypt.compare(req.body.password, user.password_hash, function(err, result){

                console.log(result)
                
                if(result){

                    const token = jwt.sign({
                        id: user._id
                    }, process.env.SECRET, {
                        expiresIn: 3600
                    })

                    res.json({
                        auth: true, token
                    })

                } else {
                    res.status(401).end()
                }
            })
        }

    }catch (error){
        console.log(error)
        res.status(500).send(error)
    }
}



module.exports = controller