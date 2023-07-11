const jwt  = require("jsonwebtoken");

exports.emailLowerCase = (req, res, next) => {
    req.body.email = req.body.email.toLowerCase();
    next();
}

exports.authenticateCheck = async(req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorised request not somvob" })
    }
    const decoded = jwt.verify(token, "slarput_hack_korbi_mair");
    console.log(decoded);
    req.userData = decoded;
    next();
}