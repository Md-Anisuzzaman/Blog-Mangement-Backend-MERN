const categoryModel = require("../models/category.model");

exports.creatCategory = async (req, res) => {
    console.log("hello from creatCategory controller");
    res.send("hello from creatCategory controller")
}
exports.editCategory = async (req, res) => {
    console.log("hello from editCategory controller");
    res.send("hello from editCategory controller")
}
exports.deleteCategory = async (req, res) => {
    console.log("hello from deleteCategory controller");
    res.send("hello from deleteCategory controller")
}

exports.singleCategory = async (req, res) => {
    console.log("hello from singleCategory controller");
    res.send("hello from singleCategory controller")
}
exports.getCategory = async (req, res) => {
    const categories = await categoryModel.find({})
    const response = categories.map((category) => category._id)
    res.json(response)
}
