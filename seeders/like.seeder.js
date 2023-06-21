const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const likersModel = require("../models/like.model");
const { getUsersId } = require('../utils/toDo');

const likers = async () => {
    return [
        {
            like_id: await getUsersId(),
        },
        {
            like_id: await getUsersId(),
        },
        {
            like_id: await getUsersId(),
        },
        {
            like_id: await getUsersId(),
        },
        {
            like_id: await getUsersId(),
        }
    ];
};

module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await likersModel.deleteMany({});
        let response = await likersModel.insertMany(await likers());
        console.log(response);
        console.log("likers seeders created successfully");
    });
