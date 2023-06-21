const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('settings', mongoose.Schema({

    setting_title: {
        type: String
    },
    setting_value: {
        type: String
    }

}, { timestamps: true }));