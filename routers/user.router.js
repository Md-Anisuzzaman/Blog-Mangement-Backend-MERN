const { body } = require('express-validator');
const express = require('express');
const Router = express.Router();
const userController = require("../controller/user.controller");
const userModel = require("../models/user.model");
const { emailLowerCase, authenticateCheck } = require('../middleware/middleWareFn');

Router.post("/registration", emailLowerCase,
    body("username")
        .not().isEmpty().withMessage("Username is required")
        .isLength({
            min: 5,
        }).withMessage("username length must be at least 5 characters"),
    body("email")
        .not().isEmpty().withMessage("Email is required")
        .isEmail().withMessage("Not email type"),

    body("password")
        .not().isEmpty().withMessage("Password is required")
        .isLength({
            min: 6,
        }).withMessage("Password lentgth must be at least 6 characters"),

    body("re_password")
        .not().isEmpty().withMessage("Re_password is required")
        .isLength({
            min: 6,
        }).withMessage("Re - password lentgth must be at least 6 characters")
  
        .custom(async (value, {
            req
        }) => {
            if (value !== req.body.password) {
                return Promise.reject('Re - password not matched with password');
            }
        })

    , userController.registerUser);


// Router.use(authenticateCheck);

Router.post("/login",
    body('email')
        .normalizeEmail()
        .not().isEmpty().withMessage('Email is empty')
        .isEmail().withMessage('Not of email type')
        .custom(async (value) => {
            let user = await userModel.findOne({
                email: value
            })
            if (!user) {
                return Promise.reject('Not Authenticated user email');
            }
        }).withMessage('Not Authenticated email'),

    body('password')
        .not().isEmpty().withMessage('Password is required'), userController.loginUser);

Router.get("/fetchuser/:id", userController.singleUser);
Router.get("/fetchusers", userController.getUsers);
Router.post("/updateuser", userController.editUser);
Router.post("/deleteuser", userController.deleteUser);
Router.post("/rolechange", userController.changeRole);
Router.post("/logout", userController.logOut);


module.exports = Router;