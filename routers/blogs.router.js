const express = require('express');
const Router = express.Router();
const blogController = require("../controller/blogs.controler");

Router.post("/api/createblog",blogController.createBlog);
Router.get("/api/fetchblog/:id", blogController.singleBlog);
Router.get("/api/fetchblogs", blogController.getBlogs);
Router.post("/api/updateblog", blogController.editBlog);
Router.post("/api/deleteblog", blogController.deleteBlog);

module.exports = Router