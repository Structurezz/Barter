
// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateUser = async (req, res, next) => {
    try {
        // Extract token from request headers or cookies
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Authorization token is missing' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user information to the request object
        req.user = await User.findById(decoded.userId);

        if (!req.user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
