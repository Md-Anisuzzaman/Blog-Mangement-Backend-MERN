const express = require("express");
const Router = express.Router();
const categoryController = require('../controller/category.controller')

Router.post("/createcategory", categoryController.creatCategory);
Router.post("/updatecategory", categoryController.editCategory);
Router.post("/deletecategory", categoryController.deleteCategory);
Router.get("/allcategory", categoryController.getCategory);
Router.get("/fetchcategory/:id", categoryController.singleCategory);
Router.get("/info", categoryController.getCategoryPopulate);

module.exports = Router;