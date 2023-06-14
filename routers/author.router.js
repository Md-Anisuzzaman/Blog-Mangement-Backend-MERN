const express = require("express");
const Router = express.Router();
const authorController = require("../controller/author.controller")

Router.post('/api/createauthor',authorController.createWritter);
Router.post('/api/updateauthor',authorController.editWritter);
Router.post("/api/deleteauthor",authorController.deleteWritter);
Router.get('/api/fetchauthor',authorController.singleWritter)

module.exports = Router;