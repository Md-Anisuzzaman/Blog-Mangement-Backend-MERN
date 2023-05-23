const categoryModel = require("./models/category.model");
const categorySeeder = require("./seeders/category.seeder");
const writterSeeder = require("./seeders/writter.seeder");
const blogsSeeder = require("./seeders/blogs.seeder")
const translatorSeeder = require("./seeders/translator.seeder")

const seed = async () => {
    // await categorySeeder()
    // await writterSeeder();
    // await blogsSeeder();
    await translatorSeeder()
}

seed();
