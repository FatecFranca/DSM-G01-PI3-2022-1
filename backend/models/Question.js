const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        number: {
            type: Number,
            required: true
        },

        enunciation: {
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

    schema.index({group: 1, number: 1}, {unique: true})

    return mongoose.model('Question', schema, 'questions')


}