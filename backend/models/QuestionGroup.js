const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({
        group: {
            type: String, 
            required: true

        },

        description: {
            type: String,
            required: true
        }
    })
    // geração do model 
    // 1° parametro = nome da coleção
    // 2° parametro = atributos do model 
    // 3° parametro = nome da collection no banco de dados 

    return mongoose.model('QuestionGroup', schema, 'question_groups')

}
