const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const categoryModel = require("../models/category.model");

let categories = [
    {
        title: "Opinion",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        title: "Sports",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        title: "Buisness",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        title: "Entertainement",
        creator: "646226ffee181ff768e5cf65"
    },
    {
        title: "Film",
        creator: "646226ffee181ff768e5cf65"
    },
]
// mongoose.set("strictQuery", false);
// main().catch(err => console.log(err));
module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("category sending");
        await categoryModel.deleteMany({});
        let response = await categoryModel.insertMany(categories);
        const creators = await categoryModel.findOne({}).populate('creator');
        console.log(creators);

        // console.log("category saved successfully");
    });

