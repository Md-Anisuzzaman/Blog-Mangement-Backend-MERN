const mongoose = require('mongoose');
const { Db_url } = require("../config/db.config");
const subBlogSuggModel = require("../models/subBlogSugg.model");
const { getUsersId, getBlogId, getAuthorId } = require('../utils/toDo');

const subBlogSugg = async () => {

    return [
        {
            sugg_content: "I know that starting a blog can seem overwhelming and intimidating. This free guide is all about blogging for beginners, and will teach you how to become a blogger with just the most basic computer skills.",
            creator: await getUsersId(),
            blog_creator: await getBlogId(),
            author_who_creat: await getAuthorId()
        },
        {
            sugg_content: "when I was first learning how to build a blog I made a ton of mistakes. You can benefit from more than a decade of my experience so that you don’t repeat these same mistakes when you make your own blog",
            creator: await getUsersId(),
            blog_creator: await getBlogId(),
            author_who_creat: await getAuthorId()
        },
        {
            sugg_content: "The step-by-step guide on this page will show you how to create a blog in 20 minutes with just the most basic computer skills.",
            creator: await getUsersId(),
            blog_creator: await getBlogId(),
            author_who_creat: await getAuthorId()
        },
        {
            sugg_content: "This guide is made especially for beginners. I will walk you through each and every step, using plenty of pictures and videos to make it all perfectly clear.",
            creator: await getUsersId(),
            blog_creator: await getBlogId(),
            author_who_creat: await getAuthorId()
        },
        {
            sugg_content: "After completing this guide you will have a beautiful blog that is ready to share with the world.",
            creator: await getUsersId(),
            blog_creator: await getBlogId(),
            author_who_creat: await getAuthorId()
        },
    ];
};


module.exports = () => mongoose.connect(Db_url)
    .then(async () => {
        await subBlogSuggModel.deleteMany({});
        let response = await subBlogSuggModel.insertMany(await subBlogSugg());
        console.log(response);
        console.log("sub Blog suggestion seeders created successfully");
    });
