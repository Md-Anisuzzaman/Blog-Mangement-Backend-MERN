const categoryModel = require("./models/category.model");
const usersSeeder = require("./seeders/users.seeder");
const categorySeeder = require("./seeders/category.seeder");
const authorSeeder = require("./seeders/author.seeder");
const blogsSeeder = require("./seeders/blogs.seeder")
const translatorSeeder = require("./seeders/translator.seeder")
const tagsSeeder = require("./seeders/tags.seeder")
const subBlogSuggSeeder = require("./seeders/subBlogSugg.seeder")
const followersSeeder = require("./seeders/follow.seeder")
const subscribersSeeder = require("./seeders/subscriber.seeder")
const likersSeeder = require("./seeders/like.seeder")
const commentsSeeder = require("./seeders/comment.seeder")
const settingsSeeder = require("./seeders/settings.seeder")

const seed = async () => {
    // await usersSeeder()
    await categorySeeder();
    await authorSeeder();
    await translatorSeeder()
    await blogsSeeder();
    await tagsSeeder();
    await subBlogSuggSeeder();
    await followersSeeder();
    await subscribersSeeder();
    await likersSeeder();
    await commentsSeeder();
    await settingsSeeder();

}

seed();
