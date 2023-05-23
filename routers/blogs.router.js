const express = require('express');
const Router = express.Router();
const blogController = require("../controller/blogs.controler");

Router.post("/createblog", blogController.createBlog);
Router.get("/fetchblog", blogController.singleBlog);
Router.post("/updateblog", blogController.editBlog);
Router.post("/deleteblog", blogController.deleteBlog);

module.exports = Router;