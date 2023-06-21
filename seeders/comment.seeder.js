const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const commentsModel = require("../models/comment.model");
const { getUsersId, getBlogId } = require('../utils/toDo');

const comments = async () => {
    return [
        {
            comment: "Please try out this demo of our new Tiny Comments premium plugin. Just highlight the content you want to add a comment",
            comm_blog_id: await getBlogId(),
            comm_creator_id: await getUsersId()
        },
        {
            comment: "Please try out this demo of our new Tiny Comments premium plugin. Just highlight the content you want to add a comment",
            comm_blog_id: await getBlogId(),
            comm_creator_id: await getUsersId()
        },
        {
            comment: "Please try out this demo of our new Tiny Comments premium plugin. Just highlight the content you want to add a comment",
            comm_blog_id: await getBlogId(),
            comm_creator_id: await getUsersId()
        },
        {
            comment: "Please try out this demo of our new Tiny Comments premium plugin. Just highlight the content you want to add a comment",
            comm_blog_id: await getBlogId(),
            comm_creator_id: await getUsersId()
        },
        {
            comment: "Please try out this demo of our new Tiny Comments premium plugin. Just highlight the content you want to add a comment",
            comm_blog_id: await getBlogId(),
            comm_creator_id: await getUsersId()
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await commentsModel.deleteMany({});
        let response = await commentsModel.insertMany(await comments());
        console.log(response);
        console.log("comments seeders created successfully");
    });
