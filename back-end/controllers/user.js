// importa o model correspondente
const User = require('../models/User')()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const controller = {} // objeto vazio

// Função que será chamada para criar uma nova 
// entrada do user
controller.create = async (req , res) => {
    try {
        // é necessário agora ter um campo password no body
        if(!req.body.password) return res.status(500).send({error: 'Path "password" is required'})

        //encripta a valor de "password" em "password_hash"
        req.body.password_hash = await bcrypt.hash(req.body.password, 12)

        //destrói o campo password para que ele não seja passado para o model
        delete req.body.password

        await User.create(req.body)
        // HTTP 201: Created
        res.status(201).send()
    }

    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

//Função que devolve um listagem das entradas de 
// user já inseridas
controller.retrieve = async (req, res) => {
    try{
        let result
        // apenas o usuário administratdor estaria autorizado 
        // a listar todos os usuários
        if(req.authenticatedId === 'Id do usuário Admin')
        {
            result = await User.find();
        }
        else
        {
            result = await User.find({ _id: req.authenticatedId})
        }

        //const result = await User.find().select('-password_hash')
        //const result = await User.find()
        // HTTP 200; OK é ímplicito aqui
        res.send(result)
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

//Função que retorna uma única entrada do user
// com base no id fornecido
controller.retrieveOne = async (req, res) =>{
    try{
        const id = req.params.id

        let result
        // Retornamos os dados do usuário solicitado somente se quem estiver
        // logado for admin ou o próprio usário sendo consultado
        if ( req.authenticatedId === 'Id do usuário admin' || req.authenticatedId ===id)
            result = await User.findById(id)
        else
            result = null
        

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

        // é necessário agora ter um campo password no body

        if(req.body.password){// se o campo password existir
            //encripta a valor de "password" em "password_hash"
            req.body.password_hash = await bcrypt.hash(req.body.password, 12)
            //destrói o campo password para que ele não seja passado para o model
            delete req.body.password
        }

        const id = req.body._id
        const result = await User.findByIdAndUpdate(id, req.body)
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
        const result = await User.findByIdAndDelete(id)
        if(result) res.status(204).end()
        else res.statu(404).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }  
}

controller.login = async (req, res) =>
{
    try
    {
        //buscar o usuário no banco de dados
        const user = await User.findOne({email: req.body.email}).select('password_hash')
        if(!user)  // Usuário não encontrado
        {
            // HTTP 401: Unauthorized
            res.status(401).end()
        }
        else 
        {
        bcrypt.compare(req.body.password, user.password_hash,
            function(err, result)
            {
                if(result)
                {
                    //senha bate
                    const token = jwt.sign({id:user._id}, process.env.SECRET, {expiresIn: 3600})
                    // expiresIn: prazo de validade do token em segundos

                    // Resposta com HTTP 200 implicito
                    res.json({auth: true, token})
                }
                else
                {
                    // senha não bate
                    // HTTP 401: Unauthorized
                    res.status(401).end()
                }
            })
        }
    }
    catch(error)
    {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.logout = async (req, res) => {
    res.send({auth: false, token: null})
}

module.exports = controller


