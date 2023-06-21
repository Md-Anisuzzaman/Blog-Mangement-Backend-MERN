const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('follow', mongoose.Schema({

    follower_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    followed_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
}, { timestamps: true }));