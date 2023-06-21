const { default: mongoose, Schema } = require('mongoose')

module.exports = mongoose.model('likers', mongoose.Schema({

    like_id: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
 
}, { timestamps: true }));