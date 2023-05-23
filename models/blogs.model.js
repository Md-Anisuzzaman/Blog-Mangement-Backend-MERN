const { mongoose, Schema } = require('mongoose');
const writerModel = require("./writter.model");

module.exports = mongoose.model('blogs', mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    writter: {
        type: Schema.Types.ObjectId,
        ref: "writters",
    },

    translator: {
        type: Schema.Types.ObjectId,
        ref: 'translators',
    },
    thumb_image: {
        type: String,
        default: false,
    },
    related_images: [String],
    published: {
        type: Boolean,
        default: false,
    },
    writting_date: {
        type: Date,
        default: Date.now(),

    },
    views: {
        type: Number,
        default: 0,
    },
    status: {
        type: Boolean,
        default: true
    },
    seo__title: String,
    seo_description: String,
    seo_keywords: String
}, { timestamps: true }));