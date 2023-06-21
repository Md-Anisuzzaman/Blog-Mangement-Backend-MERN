const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const subscribersModel = require("../models/subscriber.model");
const { getUsersId } = require('../utils/toDo');

const subscribers = async () => {
    return [
        {
            subscriber_id: await getUsersId(),
        },
        {
            subscriber_id: await getUsersId(),
        },
        {
            subscriber_id: await getUsersId(),
        },
        {
            subscriber_id: await getUsersId(),
        },
        {
            subscriber_id: await getUsersId(),
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await subscribersModel.deleteMany({});
        let response = await subscribersModel.insertMany(await subscribers());
        console.log(response);
        console.log("subscribers seeders created successfully");
    });
