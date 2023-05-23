const express = require("express");
const Router = express.Router();
const writterController = require("../controller/writter.controller")

Router.post('/api/createtwritter',writterController.createWritter);
Router.post('/api/updatewritter',writterController.editWritter);
Router.post("/api/deletewritter",writterController.deleteWritter);
Router.get('/api/fetchwritter',writterController.singleWritter)

module.exports = Router;