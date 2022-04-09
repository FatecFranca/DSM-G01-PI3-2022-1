// importa o model correspondente 
const Answer = require('../models/Answer')()

const controller = {}  // objeto vazio 

// Função que será chamada para criar entrada no Glossário
controller.create = async(req, res) => {
    try{
        await Answer.create(req.body)
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
        const result = await Answer.find({}).populate('assessment').populate('question')
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
        const result = await Answer.findById(id)
        
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
        const result = await Answer.findByIdAndUpdate(id, req.body)

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
        const result = await Answer.findByIdAndDelete(id)

        if(result) res.status(204).end()

        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = controller