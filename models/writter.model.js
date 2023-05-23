const { default: mongoose,Schema } = require("mongoose");
const userModel = require("./user.model");

module.exports = mongoose.model('writters', mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    description:{
        type: String,
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