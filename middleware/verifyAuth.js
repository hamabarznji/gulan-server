const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Unauthorized");
    const token = authorization.split(" ")[1];
    try {
        jwt.verify(token, "mbsT");
        next();
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
};

module.exports = verifyToken;