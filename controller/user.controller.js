const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array(),
        })
    }
    try {
        const { username, email, password } = req.body
        const securePass = await bcrypt.hash(password, 10);

        const user = await userModel.findOne({ email: email })

        const newUser = new userModel({
            username,
            email,
            password: securePass,
            role: "admin"
        });

        if (!user) {
            const token = await jwt.sign({
                username,
                email,
                _id: newUser._id
            }, "slarput_hack_korbi_mair", { expiresIn: "1d" })

            const storeUser = await newUser.save();

            res.status(200).json({
                storeUser,
                token
            })
        }
        else {
            res.status(400).json({ status: 'fail', data: "user exists. request can't process" })
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email: email }).exec();

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(422).json("Password not match");
            }
            const token = await jwt.sign({
                username: user.username,
                email: user.email,
                id: user.id
            }, "slarput_hack_korbi_mair")

            res.status(200).json({
                status: 'success', data: {
                    result: user,
                    token
                }
            })
        }
        else {
            res.status(400).json({ status: 'fail', data: "Not authorized user" })
        }
    } catch (error) {
        res.status(404).json(error)
    }
}



exports.editUser = async (req, res) => {
    console.log(req.body);
    try {
        const body = req.body;
        const updateId = body.id;
        console.log(updateId);

        if (body.id) {

            //updateOne e duita parameeter thake find and update
            const result = await userModel.updateOne(
                { _id: updateId },
                {
                    ...body,
                }
            )
            res.status(200).json(result)
        }
        else {
            res.status(422).json({ message: "Unable to process" })

        }

    } catch (error) {
        res.status(406).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.body.id
        if (id) {
            const result = await userModel.deleteOne({ _id: id });
            res.status(200).json(result);
        }
        else {
            res.status(422).json({ message: "Unable to process" })
        }

    } catch (error) {
        res.status(406).json({ message: error.message })
    }
}

exports.singleUser = async (req, res) => {
    try {
        const id = req.params.id
        const sn_user = await userModel.findById(id)
        if (sn_user) {
            res.json(sn_user);
        }
        else {
            res.json({ message: "User not found" })
        }
    } catch (error) {
        res.status(406).json({ message: error.message });
    }
}
exports.getUsers = async (req, res) => {
    try {

        const allUers = await userModel.find()
        if (allUers) {
            res.status(200).json(allUers)
        }
        else {
            res.status(422).json({ message: "Users not found" })
        }

    } catch (error) {
        res.status(406).json({ message: error.message });
    }
}
