const { mongoose, Schema } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const writerModel = require("./author.model");

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
    category: [{
        type: Schema.Types.ObjectId,
        ref: "categories",
    }],
    // category: [{
    //     type: [String],
    //     ref: "categories",
    // }],
    creator: {
        type: [Schema.Types.ObjectId],
        ref: "users",
    },
    author: {
        type: [Schema.Types.ObjectId],
        ref: "authors",
    },

    translator: {
        type: [Schema.Types.ObjectId],
        ref: 'translators',
    },

    thumb_image: {
        type: String,
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