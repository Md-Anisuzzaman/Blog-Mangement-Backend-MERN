const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('translators', mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    status: {
        type: Boolean,
        default: true
    }

}, { timestamps: true }));