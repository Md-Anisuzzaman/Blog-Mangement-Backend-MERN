const blogsModel = require("../models/blogs.model");
const categoryModel = require("../models/category.model");
const userModel = require("../models/user.model");
const { getCategoryId } = require("../utils/toDo");


exports.createBlog = async (req, res) => {
    try {
        const {
            title,
            short_description,
            description,
            thumb_image,
            related_images,
            published,
            views
        } = req.body;

        const getCreatorId = async () => {
            const creatorids = await userModel.find()
            return creatorids.map(item => item.id)
        }
        const value = await getCreatorId()
        console.log(value[0]);
        const newBlog = new blogsModel({
            title,
            short_description,
            description,
            thumb_image,
            category: await getCategoryId(),
            creator: value[0],
            related_images,
            published,
            views
        });
        const storeBlog = await newBlog.save()
        res.status(200).json(storeBlog);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.editBlog = async (req, res) => {
    try {
        const { id, title } = req.body

        if (id) {

            const updateBlog = await blogsModel.updateOne(
                { _id: id },
                {
                    title
                }
            )
            res.status(200).send(updateBlog)
        }
        else {
            res.status(422).json({ message: "Unable to process" })
        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
exports.deleteBlog = async (req, res) => {
    try {
        const id = req.body.id
        if (id) {
            const deleteBlog = await blogsModel.deleteOne({ _id: id })
            res.status(200).json(deleteBlog)
        }
        else {
            res.status(422).json({ message: "Unable to process delete operation" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.singleBlog = async (req, res) => {
    try {
        const id = req.params.id
        if (id) {
            const getBlog = await blogsModel.findById({ _id: id });
            res.status(200).json(getBlog)
        }
        else {
            res.status(422).json({ message: "Unable to find blog" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getBlogs = async (req, res) => {
    try {
        const getBlogs = await blogsModel.find();
        res.status(200).json(getBlogs)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}