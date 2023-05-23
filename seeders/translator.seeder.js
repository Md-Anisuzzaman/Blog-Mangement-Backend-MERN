const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const translatorModel = require("../models/translator.model");

let translator = [
    {
        name: "D - Costa",
        image: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02390fd9f13b_man-voiceover-translation.jpg",
        description: "Translator responsibilities include reading and thoroughly understanding the context of given material, using specialized dictionaries and translation tools and proofreading finished pieces of work. To be successful in this role, you should have a keen eye for detail and be fluent in at least two languages in addition to your native language.",
        creator: "646226ffee181ff768e5cf65",
    },
    {
        name: "Royal Mirage",
        image: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02390fd9f13b_man-voiceover-translation.jpg",
        description: "Translator responsibilities include reading and thoroughly understanding the context of given material, using specialized dictionaries and translation tools and proofreading finished pieces of work. To be successful in this role, you should have a keen eye for detail and be fluent in at least two languages in addition to your native language.",
        creator: "646226ffee181ff768e5cf65",
    },
    {
        name: "Benny Howel",
        image: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02390fd9f13b_man-voiceover-translation.jpg",
        description: "Translator responsibilities include reading and thoroughly understanding the context of given material, using specialized dictionaries and translation tools and proofreading finished pieces of work. To be successful in this role, you should have a keen eye for detail and be fluent in at least two languages in addition to your native language.",
        creator: "646226ffee181ff768e5cf65",
    },
    {
        name: "Mandingo",
        image: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02390fd9f13b_man-voiceover-translation.jpg",
        description: "Translator responsibilities include reading and thoroughly understanding the context of given material, using specialized dictionaries and translation tools and proofreading finished pieces of work. To be successful in this role, you should have a keen eye for detail and be fluent in at least two languages in addition to your native language.",
        creator: "646226ffee181ff768e5cf65",
    },
    {
        name: "Maddy",
        image: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02390fd9f13b_man-voiceover-translation.jpg",
        description: "Translator responsibilities include reading and thoroughly understanding the context of given material, using specialized dictionaries and translation tools and proofreading finished pieces of work. To be successful in this role, you should have a keen eye for detail and be fluent in at least two languages in addition to your native language.",
        creator: "646226ffee181ff768e5cf65",
    },
]

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");

        console.log("translator creating");
        await translatorModel.deleteMany({});
        let response = await translatorModel.insertMany(translator);
        console.log(response);
        console.log("\n");
        console.log("translator created successfully");

        // const creators = await writterModel.findOne({}).populate('creator');
        // console.log(creators);

        // console.log("category saved successfully");
    });

