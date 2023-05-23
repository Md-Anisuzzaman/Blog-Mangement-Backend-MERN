const { default: mongoose, Schema } = require("mongoose")

module.exports = mongoose.model("users", mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: String,
    address: String,
    mobile: String,
    role: {
        type: String,
        default: "user"
    },
    creator: {
        type: String,
    }
}, { timwstamps: true }));
