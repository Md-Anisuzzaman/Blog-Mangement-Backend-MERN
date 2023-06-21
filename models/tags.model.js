const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('tags', mongoose.Schema({

    tag_name: {
        type: String,
        required: true,
    },
    creator: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    blog_creator: {
        type: [Schema.Types.ObjectId],
        ref: 'blogs'
    }
}, { timestamps: true }));