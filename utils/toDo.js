const categoryModel = require("../models/category.model");
const authorModel = require("../models/author.model");
const translatorModel = require("../models/translator.model");
const userModel = require("../models/user.model");
const blogsModel = require("../models/blogs.model");


module.exports.getUsersId = async function () {
    const users = await userModel.find()
    const result = users.map(user => user.id)
    const randomValue = result[Math.floor(Math.random() * result.length)];
    return randomValue
}

module.exports.getCategoryId = async function () {
    const categories = await categoryModel.find()
    const result = categories.map(category => category.id)
    const randomValue = result[Math.floor(Math.random() * result.length)];
    return randomValue
}

module.exports.getAuthorId = async function () {
    const authors = await authorModel.find()
    const result = authors.map(author => author.id)
    const randomValue = result[Math.floor(Math.random() * result.length)];
    return randomValue
}
module.exports.getTranslatorId = async function () {
    const translators = await translatorModel.find()
    const result = translators.map(translator => translator.id)
    const randomValue = result[Math.floor(Math.random() * result.length)];
    return randomValue
}
module.exports.getBlogId = async function () {
    const blogs = await blogsModel.find()
    const result = blogs.map(blog => blog.id)
    const randomValue = result[Math.floor(Math.random() * result.length)];
    return randomValue
}

module.exports.getCurrTime = function () {
    const time = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric'
    });

    return time
}




