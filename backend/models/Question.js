const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        question: {
            type: String,
            required: true,

        },
        // chave estrangeira para question_group
        group: {
            type: mongoose.ObjectId,
            ref: 'QuestionGroup',
            required: true
        }
    })

    return mongoose.model('Question', schema, 'questions')
}