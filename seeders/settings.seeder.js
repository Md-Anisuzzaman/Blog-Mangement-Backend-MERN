const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const settingsModel = require("../models/settings.model")


const settings = async () => {
    return [
        {
            setting_title: "Logo",
            setting_value: "http:/logo.png.com",
        },
        {
            setting_title: "Email",
            setting_value: "example@example.com",
        },
        {
            setting_title: "Phone Number",
            setting_value: "0145668323",
        },
        {
            setting_title: "Seo_title",
            setting_value: "Jakkas",
        },
        {
            setting_description: "Seo_description",
            setting_value: "if you are ready to buy, you can either purchase Tiny Comments a la carte or as part of your Tiny Pro subscription. If you are a current cloud user, Tiny Comments has already been added to your key, and if you are a self-hosted user, Tiny Comments is now available in the latest download which you can access in My Account"
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await settingsModel.deleteMany({});
        let response = await settingsModel.insertMany(await settings());
        console.log(response);
        console.log("settings seeders created successfully");
    });
