const express = require('express');
const Router = express.Router();
const resetPassController = require("../controller/resetPass.controller");


Router.post("/verify", resetPassController.resetVerify)

module.exports = Router;