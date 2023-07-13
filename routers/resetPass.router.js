const express = require('express');
const Router = express.Router();
const { body, check } = require('express-validator');
const resetPassController = require("../controller/resetPass.controller");
const userModel = require('../models/user.model');

Router.post("/verify", [
    body('email')
        .normalizeEmail()
        .not().isEmpty().withMessage('Email is empty')
        .isEmail().withMessage('Not of email type')
        .custom(async (value, { req }) => {
            const user = await userModel.findOne({ email: value });
            if (!user) {
                throw new Error('Not Authenticated user email');
            }
        })
], resetPassController.resetVerify);
Router.post("/passreset", resetPassController.resetPass);

module.exports = Router;