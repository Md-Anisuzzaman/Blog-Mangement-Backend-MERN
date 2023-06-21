const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('sub_blog_Sugg', mongoose.Schema({

    sugg_content: {
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
    },
    author_who_creat: {
        type: [Schema.Types.ObjectId],
        ref: 'authors'
    }
}, { timestamps: true }));