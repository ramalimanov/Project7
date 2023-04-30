// Implement Authentication Middleware
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // [] means after barrer token
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); // verify token function
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error("Invalid user ID");
    } else {
      req.auth = { userId };
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
