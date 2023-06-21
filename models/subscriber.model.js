const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('subscriber', mongoose.Schema({

    subscriber_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },

}, { timestamps: true }));