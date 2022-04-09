// importa o model correspondente
const Question = require('../models/Question')()

const controller = {} // objeto vazio

// Função que será chamada para criar uma nova 
// entrada do glossário
controller.create = async (req , res) => {
    try {
        await Question.create(req.body)
        // HTTP 201: Created
        res.status(201)
    }

    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

//Função que devolve um listagem das entradas de 
// glossário já inseridas
controller.retrieve = async (req, res) => {
    try{
        const result = await Question.find().populate('group')
        // HTTP 200; OK é ímplicito aqui
        res.send(result)
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

//Função que retorna uma única entrada do glossario
// com base no id fornecido
controller.retrieveOne = async (req, res) =>{
    try{
        const id = req.params.id
        const result = await Question.findById(id)
        //se tivermos um resultado, retornamos com status HTTP 200
        if(result) res.send(result)
        //Senão , retornamos HTTP 404: Not Found
       // else res.send(404).end()
       else res.status(404).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }

},

controller.update = async (req, res) => {
    try{
        const id = req.body._id
        const result = await Question.findByIdAndUpdate(id, req.body)
        //HTTP 204: no Content
        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }  
},

controller.delete = async (req, res) => {
    try{
        const id = req.body._id
        const result = await Question.findByIdAndDelete(id)
        if(result) res.status(204).end()
        else res.statu(404).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }  
}

module.exports = controller


