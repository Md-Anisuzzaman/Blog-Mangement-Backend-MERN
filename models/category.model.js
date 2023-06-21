const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('categories', mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: [Schema.Types.ObjectId],
        ref: "users",
    },
    blog_creator: {
        type: [Schema.Types.ObjectId],
        ref: "blogs",
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }));

