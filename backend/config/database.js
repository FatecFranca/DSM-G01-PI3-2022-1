const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERV}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        // parametros da conexão
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => 
        console.log('** Mongoose! Conectado ao servidor remoto')
        )
    
    mongoose.connection.on('error', erro => 
        console.error('** ERRO: Mongoose! não conectado ao servidor remoto. Causa: ' + erro)
    )
}