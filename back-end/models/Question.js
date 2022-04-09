const mongoose = require('mongoose')
const QuestionGroup = require('./QuestionGroup')

module.exports = function()
{
    const schema = mongoose.Schema({
        number: {
            type: Number,
            required: true
        },
        enunciation:{
            type: String,
            required: true
        },
        // chave estrangeira para QuestionGroup
        group: {
            type: mongoose.ObjectId,
            ref: 'QuestionGroup',
            required: true
        }
    })

    
    // criando índice único para os campos de group e number
    schema.index({group: 1 /* ASCendente */, number: 1 /* ASC */}, {unique: true})
    
    return mongoose.model('Question', schema, 'questions')
}