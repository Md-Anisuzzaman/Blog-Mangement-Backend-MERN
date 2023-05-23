const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const writterModel = require("../models/writter.model");

let writters = [
    {
        name: "Hasan",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        name: "abdul",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        name: "Mirza",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        name: "Joban",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        name: "Nolok",
        creator: "646226ffee181ff768e5cf65"
    },
]
// mongoose.set("strictQuery", false);
// main().catch(err => console.log(err));
module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("writter sending");
        await writterModel.deleteMany({});
        let response = await writterModel.insertMany(writters);
        // console.log(response);

        // console.log("writter saved successfully");
    });

