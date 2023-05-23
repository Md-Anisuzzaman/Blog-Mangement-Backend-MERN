const express = require("express");
const Router = express.Router();
const categoryController = require('../controller/category.controller')

Router.post("/api/createcategory", categoryController.creatCategory);
Router.post("/api/updatecategory", categoryController.editCategory);
Router.post("/api/deletecategory", categoryController.deleteCategory);
Router.get("/api/fetchcategory", categoryController.singleCategory);

module.exports = Router;