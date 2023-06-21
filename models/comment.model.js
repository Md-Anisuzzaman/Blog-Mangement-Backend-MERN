const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('comments', mongoose.Schema({

    comment: {
        type: String,
        required: true
    },

    comm_blog_id: {
        type: [Schema.Types.ObjectId],
        ref: 'blogs'
    },
    comm_creator_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }

}, { timestamps: true }));