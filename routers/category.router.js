const express = require("express");
const Router = express.Router();
const categoryController = require('../controller/category.controller')

Router.post("/createcategory", categoryController.creatCategory);
Router.post("/updatecategory", categoryController.editCategory);
Router.post("/deletecategory", categoryController.deleteCategory);
Router.get("/allcategory", categoryController.getCategory);
Router.get("/fetchcategory", categoryController.singleCategory);

module.exports = Router;