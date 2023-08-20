const jwt = require("jsonwebtoken");

exports.emailLowerCase = (req, res, next) => {
    req.body.email = req.body.email.toLowerCase();
    next();
}

// exports.authenticateCheck = async(req, res, next) => {
//     const token = req.headers?.authorization?.split(" ")[1];
//     console.log(token);
//     if (!token) {
//         return res.status(401).json({ message: "Unauthorised request not somvob" })
//     }
//     const decoded = jwt.verify(token, "slarput_hack_korbi_mair");
//     console.log(decoded);
//     req.userData = decoded;
//     next();
// }

exports.authenticateCheck = async (req, res, next) => {
    const token = req.cookie.jwt
    if (!token) {
        res.status(401).json({ message: 'Unathorized user' });
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.status(401).json({ message: 'Unable to access verified' });
        }
        req.userData = user;
        next();
    });
}