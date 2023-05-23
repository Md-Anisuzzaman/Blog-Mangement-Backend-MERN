const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const blogsModel = require("../models/blogs.model");

let blogs = [
    {
        title: "Film",
        short_description: " Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
        description:"Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
        creator: "646226ffee181ff768e5cf65",
        category:"6463aed5e90e5e17bb346787",
        writter:"6463aed6e90e5e17bb346790",
    },
    {
        title: "Entertainment",
        short_description: " Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
        description:"Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
        creator: "646226ffee181ff768e5cf65",
        category:"6463aed5e90e5e17bb346787",
        writter:"6463aed6e90e5e17bb346790",
    },
    {
        title: "Opinion",
        short_description: " Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
        description:"Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
        creator: "646226ffee181ff768e5cf65",
        category:"6463aed5e90e5e17bb346787",
        writter:"6463aed6e90e5e17bb346790",
    },
    {
        title: "Buisness",
        short_description: " Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
        description:"Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
        creator: "646226ffee181ff768e5cf65",
        category:"6463aed5e90e5e17bb346787",
        writter:"6463aed6e90e5e17bb346790",
    },
    {
        title: "Politics",
        short_description: " Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
        description:"Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
        creator: "646226ffee181ff768e5cf65",
        category:"6463aed5e90e5e17bb346787",
        writter:"6463aed6e90e5e17bb346790",
    },

]

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("category sending");
        await blogsModel.deleteMany({});
        let response = await blogsModel.insertMany(blogs);
        console.log(response);
        // const creators = await writterModel.findOne({}).populate('creator');
        // console.log(creators);

        // console.log("category saved successfully");
    });

