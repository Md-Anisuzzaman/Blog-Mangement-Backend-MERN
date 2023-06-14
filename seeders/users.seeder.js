const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const userModel = require("../models/user.model");

let users = [
    {
        username: "John Smith",
        email: "example@example.com",
        password: "123456789",
        gender: "male",
        mobile: "0171565666",
        address: "Somalia"
    }
]
// mongoose.set("strictQuery", false);
// main().catch(err => console.log(err));
module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("writter sending");
        // await userModel.deleteMany({});
        let response = await userModel.insertMany(users);
        // console.log(response);

        // console.log("writter saved successfully");
    });

