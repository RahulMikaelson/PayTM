const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: "No token provided" });
    }
    else {
        const token = authToken.slice(7,authToken.length);
        try {
            const decode =jwt.verify(token, JWT_SECRET);
            req.userId = decode.userId;
            next();
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
}

module.exports = {authMiddleware}