const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const categoryModel = require("../models/category.model");
const { getUsersId, getBlogId } = require('../utils/toDo');

const categories = async () => {

    // const userId = await getUsersId();
    // const blogId = await getBlogId();

    return [
        {
            name: "Opinion",
            creator:await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            name: "Sports",
            creator:await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            name: "Buisness",
            creator:await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            name: "Entertainement",
            creator:await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            name: "Film",
            // creator: "646226ffee181ff768e5cf65"
            creator:await getUsersId(),
            blog_creator: await getBlogId()
        },
    ];
};

// mongoose.set("strictQuery", false);
// main().catch(err => console.log(err));
module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("category sending");
        await categoryModel.deleteMany({});
        let response = await categoryModel.insertMany(await categories());
        // const creators = await categoryModel.findOne({}).populate('creator');
        console.log(response);

        // console.log("category saved successfully");
    });
