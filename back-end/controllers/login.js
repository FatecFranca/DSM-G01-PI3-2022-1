const User = require('../models/User')()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const controller = {} // objeto vazio

controller.login = async (req, res) =>
{
    try
    {
        //buscar o usuário no banco de dados
        const user = await User.findOne({email: req.body.email})
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

module.exports = controller

