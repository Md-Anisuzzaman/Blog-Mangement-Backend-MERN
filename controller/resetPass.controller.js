const userModel = require("../models/user.model")
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


exports.resetVerify = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    try {
        const email = req.body.email
        const user = await userModel.findOne({ email: email }).exec();

        if (user) {
            const token = await jwt.sign({
                username: user.username,
                email: user.email,
                id: user.id
            }, process.env.JWT_SECRET, { expiresIn: "10m" })
            let transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.USER_PASS_GOOGLE,
                },
            });

            const mailOptions = {
                from: process.env.USER_EMAIL,
                to: process.env.TO_USER_EMAIL,
                subject: "Reset password",
                text: "Click the link below to change your password",
                html: `<div style=" width: 500px;margin: 0 auto; margin-top: 80px;text-align: center;">
                <img width="180" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="">
                <p style="font-size: 20px;line-height: 1.5em;color: purple;">Hi! ${process.env.TO_USER_EMAIL}, We're sending you this email cause you
                    requested a paassword reset. Click on this button to
                    create a new
                    password:</p>
                <button style=" margin: 12px;padding: 15px 30px;border-radius: 25px;background-color: #ff3f55;border: none;"><a
                        style=" text-decoration: none;font-size: 20px;font-weight: bold;color: white;" href="http://localhost:3000/#/resetpasswordform?t=${token}">Reset your
                        password</a></button>
                <p style="font-size: 20px;line-height: 1.5em;color: purple;">If you didn't request a password reset, you can
                    ignore this email. Your password will not be changed.</p>
                <p style="font-size: 20px;line-height: 1.5em;color: purple;">If you got this mail as spam then click on "looks
                    safe" or "Not spam". Hopefully, the button will work, If
                    the button not working then mail your message at TechParkIt.org.com email address or Call at 0130000000
                </p>
            </div>`
            }

            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("kichu ekta hoise", error);
                } else {
                    console.log("Email sent:" + info.response);
                }
            });

            res.json({ status: "Your password reset email was sent to your verified email. Please check!", mailOptions })
        }
        else {
            res.json("Sorry request not processed")
        }

    } catch (error) {
        res.json(error)
    }
}


exports.resetPass = async (req, res) => {
    const { password, re_password, userToken } = req.body;
    try {
        const decoded = await jwt.verify(userToken, process.env.JWT_SECRET);
        const verifyUser = await userModel.findOne({ _id: decoded.id }).exec()
        console.log("verifyInfo: " + verifyUser);
        if (!verifyUser) {
            return res.status(422).json({ err_msg: "The user request not matched with the expected response" })
        }
        if ((password && re_password) && password === re_password) {
            const changePass = await bcrypt.hash(password, 10);
            let updatePass = await userModel.updateOne(
                // { _id: ObjectId(verifyUser._id) },
                { _id: verifyUser._id },
                { password: changePass }
            )
            return res.status(200).json({
                success_msg: "password updated",
                success_for: "your password has been updated"
            })
        }
        else {
            res.status(422).json({
                error_msg: "password do not match",
                error_for: "Password Not Matched"
            })
        }
    } catch (error) {
        return res.status(406).json({
            error_msg: error.message,
            error_for: "This link has expired",
        });
    }
}