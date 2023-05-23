const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const userModel = require("../models/user.model");

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        })
    }
    try {
        const { username, email, password } = req.body
        const securePass = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            username,
            email,
            password: securePass
        });
        console.log(newUser);
        const storeUser = await newUser.save();
        res.json(storeUser)
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.editUser = async (req, res) => {
    try {
        const { id, mobile, address, gender } = req.body;
        // const body = req.body;
        // const updateId = body.id
        // console.log(updateId);

        if (id) {

            //updateOne e duita parameeter thake find and update
            const result = await userModel.updateOne(
                { _id: id },
                {
                    mobile,
                    address,
                    gender
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
