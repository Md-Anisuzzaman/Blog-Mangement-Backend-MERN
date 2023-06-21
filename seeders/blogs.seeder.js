const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const blogsModel = require("../models/blogs.model");
const categoryModel = require('../models/category.model');
const userModel = require('../models/user.model');
const { getCategoryId, getAuthorId, getTranslatorId, getUsersId } = require('../utils/toDo');



const blogs = async () => {
    // const userId = await getUsersId();
    // const authorId = await getAuthorId();
    // const translatorId = await getTranslatorId();

    return [
        {
            title: "Film",
            short_description: "Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
            description: "Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
            creator: await getUsersId(),
            thumb_image: "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg",
            related_images: ["https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"],
            category: await getCategoryId(),
            author:  await getAuthorId(),
            translator: await getTranslatorId(),
            seo__title: "Welcome",
            seo__description: 'welcome to my blog',
            seo_keywords: "important"
        },
        {
            title: "Entertainment",
            short_description: "Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
            description: "Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
            creator: await getUsersId(),
            thumb_image: "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg",
            related_images: ["https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"],
            category: await getCategoryId(),
            author:  await getAuthorId(),
            translator: await getTranslatorId(),
            seo__title: "Welcome",
            seo__description: 'welcome to my blog',
            seo_keywords: "important"
        },
        {
            title: "Opinion",
            short_description: "Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
            description: "Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
            creator: await getUsersId(),
            thumb_image: "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg",
            related_images: ["https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"],
            category: await getCategoryId(),
            author:  await getAuthorId(),
            translator: await getTranslatorId(),
            seo__title: "Welcome",
            seo__description: 'welcome to my blog',
            seo_keywords: "important"
        },
        {
            title: "Business",
            short_description: "Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
            description: "Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
            creator: await getUsersId(),
            thumb_image: "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg",
            related_images: ["https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"],
            category: await getCategoryId(),
            author:  await getAuthorId(),
            translator: await getTranslatorId(),
            seo__title: "Welcome",
            seo__description: 'welcome to my blog',
            seo_keywords: "important"
        },
        {
            title: "Politics",
            short_description: "Metro rail to run from 8am to 8pm from May 31; weekly closure Friday",
            description: "Trains will run every 10 minutes from 8:00am to 11:00pm, every 15 minutes from 11:01am to 3:00pm, every 10 minutes from 3:01pm to 6:00pm, and every 15 minutes from 6:01pm to 8:00pm",
            creator: await getUsersId(),
            thumb_image: "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg",
            related_images: ["https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"],
            category: await getCategoryId(),
            author:  await getAuthorId(),
            translator: await getTranslatorId(),
            seo__title: "Welcome",
            seo__description: 'welcome to my blog',
            seo_keywords: "important"
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        // console.log("\n");
        // console.log("category sending");
        await blogsModel.deleteMany({});
        let response = await blogsModel.insertMany(await blogs());
        console.log(response);
        // const creators = await writterModel.findOne({}).populate('creator');
        // console.log(creators);

        // console.log("category saved successfully");
    });




