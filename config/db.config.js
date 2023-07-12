const dotenv = require('dotenv');
dotenv.config();

const Db_url = `mongodb+srv://anisuzzaman1199:${process.env.MONGOO_DB}@cluster0.zxtpebr.mongodb.net/crudExplore?retryWrites=true&w=majority`

module.exports = {
    Db_url,
}