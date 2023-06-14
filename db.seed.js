const categoryModel = require("./models/category.model");
const usersSeeder = require("./seeders/users.seeder");
const categorySeeder = require("./seeders/category.seeder");
const authorSeeder = require("./seeders/author.seeder");
const blogsSeeder = require("./seeders/blogs.seeder")
const translatorSeeder = require("./seeders/translator.seeder")

const seed = async () => {
    // await usersSeeder()
    await categorySeeder();
    await authorSeeder();
    await translatorSeeder()
    await blogsSeeder();
}

seed();
