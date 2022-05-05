const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // lê o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token']

    // se o token não existir , retorn 403: forbiden
    if(!token) return res.status(403).send({auth: false, message: 'No token provided'})

    // Verifica se o token é válido e está no prazo de validade
    jwt.verify(token, process.env.SECRET, (err, decoded) => {

        //Toekn inválido ou expirado
        if(err) return res.status(403).send({auth: false, message:'Failed to authenticate token'})

        // o token está OK!
        
        //Salva o id na request para uso posterior
        req.userId = decoded.id

        next() // Chama a próxima função de middlleware

    })

}