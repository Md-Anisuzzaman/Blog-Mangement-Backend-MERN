const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const tagsModel = require("../models/tags.model");
const { getUsersId, getBlogId } = require('../utils/toDo');

const tags = async () => {

    return [
        {
            tag_name: "Boneline",
            creator: await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            tag_name: "Games",
            creator: await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            tag_name: "Market",
            creator: await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            tag_name: "Cinema",
            creator: await getUsersId(),
            blog_creator: await getBlogId()
        },
        {
            tag_name: "Film",
            creator: await getUsersId(),
            blog_creator: await getBlogId()
        },
    ];
};


module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await tagsModel.deleteMany({});
        let response = await tagsModel.insertMany(await tags());
        console.log(response);
        console.log("tags seeders created successfully");
    });
