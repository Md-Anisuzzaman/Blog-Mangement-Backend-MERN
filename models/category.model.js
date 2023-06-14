const { default: mongoose, Schema } = require("mongoose");
// const ObjectId = require('mongoose').Types.ObjectId;
module.exports = mongoose.model('categories', mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    status: {
        type: Boolean,
        default: true
    }

}, { timestamps: true }));

