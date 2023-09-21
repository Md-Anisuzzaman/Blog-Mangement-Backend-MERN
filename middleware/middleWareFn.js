const jwt = require("jsonwebtoken");

exports.emailLowerCase = (req, res, next) => {
    req.body.email = req.body.email.toLowerCase();
    next();
}

exports.generateToken = async (option, secretCode, exepired) => {
    try {
        const token = await jwt.sign(option, secretCode, exepired);
        return token;
    } catch (error) {
        console.error("JWT token generation error:", error);
        throw error;
    }
};

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
    const accesToken = req.cookies.ses_One
    const refreshToken = req.cookies.ses_Two
    console.log(accesToken,refreshToken);
    try {
        if (accesToken) {
            jwt.verify(accesToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    res.status(401).json({ message: 'Unable to access verified' });
                }
                req.userData = user;
                next();
            });
        }
        else if (refreshToken) {
            jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    res.status(401).json({ message: 'Unable to access verified' });
                }
                user = generateToken(user, process.env.ACCESS_TOKEN_SECRET)
                req.userData = user;
                next();
            });
        }
        else {
            res.status(401).json({ mwssage: "unautorized user" })
        }
    } catch (error) {
        console.log(error);
    }

}