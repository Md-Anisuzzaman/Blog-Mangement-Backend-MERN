const express = require('express');
const cors = require('cors')
const csrf = require('csurf');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const formData = require('express-form-data');
const { Db_url } = require('./config/db.config');
const userRouter = require("./routers/user.router");
const blogRouter = require("./routers/blogs.router");
const translatorRouter = require("./routers/translator.router");
const authorRouter = require("./routers/author.router");
const categoryRouter = require("./routers/category.router");
const resetPassRouter = require("./routers/resetPass.router");
const { authenticateCheck } = require('./middleware/middleWareFn');

const port = 7000;
const server = express();
server.use(cors())
server.use(cookieParser());

server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(formData.parse());

const csrfProtection = csrf({ cookie: true });

try {
    mongoose.set("strictQuery", false);
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect(Db_url)
        console.log("mongoose connected please work");
    }
} catch (err) {
    console.log(err);
}

/* All router call from there */

server.use("/api/user", userRouter);
server.use("/api/reset", resetPassRouter);
server.use(blogRouter);
server.use(translatorRouter);
server.use(authorRouter);
server.use("/api/category", categoryRouter);


server.listen(port, () => {
    console.log(`Server listening on ${port} ready to run`);
})

//DLVoupiRNwHRB9qM
