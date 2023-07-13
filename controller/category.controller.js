const categoryModel = require("../models/category.model");
const { loginUser } = require("./user.controller");

exports.singleCategory = async (req, res) => {
    try {
        const id = req.body.id
        const category = await categoryModel.findOne({ _id: id })
        // .populate("creator")
        // .populate("blog_creator")
        res.status(200).json({ category })
    } catch (error) {
        res.statu(404).json(error)
    }
}

exports.getCategory = async (req, res) => {
    const categories = await categoryModel.find({})
    const response = categories.map((category) => category._id)
    res.json(response)
}

exports.creatCategory = async (req, res) => {
    try {
        const { name } = req.body
        const newCategory = new categoryModel({
            name: name,
        })
        const storeUser = await newCategory.save();
        res.status(200).json(storeUser)

    } catch (error) {
        res.send(error)
    }
}


exports.editCategory = async (req, res) => {
    try {
        const body = req.body;
        const updateId = body.id
        const category = await categoryModel.findById(updateId);
        if (category) {
            const updatecategory = await categoryModel.updateOne(
                { _id: updateId },
                { ...body, }
            )
            res.status(200).json({ status: "Successfully updated your required data", result: updatecategory })
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const id = req.body.id
        if (id) {
            const result = await categoryModel.deleteOne({ _id: id });
            res.status(200).json({ status: "Succesfully deleted category", data: result });
        }
        else {
            res.status(422).json({ message: "Unable to process" })
        }

    } catch (error) {
        res.status(406).json({ message: error.message })
    }
}

