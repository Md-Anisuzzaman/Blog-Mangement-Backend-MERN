const express = require("express");
const Router = express.Router();
const transtlatorController = require("../controller/translator.controller")

Router.post('/api/createtranslator',transtlatorController.createTranslator);
Router.post('/api/updatetranslator',transtlatorController.editTranslator);
Router.post("/api/deletetranslator",transtlatorController.deleteTranslator);
Router.get('/api/fetchtranslator',transtlatorController.singleTranslator)

module.exports = Router;