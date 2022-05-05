const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // Le o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token']

    //Se o token nao existir, retorna 403
    if(! token) res.status(403).send({auth: false, message: 'No token provided'})

    //Verifica se o token é válido e está ativo
    jwt.verify(token, process.env.SECRET, (err, decoded) => {

        // Token invalido ou expirado
        if(err) return res.status(403).send({auth: false, message: 'Failed to authenticate token'})

        // O token está ok 
        req.userId = decoded.id

        next()

    })


}