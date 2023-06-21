const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const followersModel = require("../models/folllow.model");
const { getUsersId } = require('../utils/toDo');

const followers = async () => {
    return [
        {
            follower_id: await getUsersId(),
            followed_id: await getUsersId()
        },
        {
            follower_id: await getUsersId(),
            followed_id: await getUsersId()
        },
        {
            follower_id: await getUsersId(),
            followed_id: await getUsersId()
        },
        {
            follower_id: await getUsersId(),
            followed_id: await getUsersId()
        },
        {
            follower_id: await getUsersId(),
            followed_id: await getUsersId()
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await followersModel.deleteMany({});
        let response = await followersModel.insertMany(await followers());
        console.log(response);
        console.log("followers seeders created successfully");
    });
