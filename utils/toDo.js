const categoryModel = require("../models/category.model");

module.exports.getCategoryId = async function () {
    console.log("hello");
    const categories = await categoryModel.find()
    return categories.map(category => category.id)
}

