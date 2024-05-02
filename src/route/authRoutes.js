

const express = require('express');
const router = express.Router();
const authService = require('../services/authService.js');
const { validateLogin, validateRegistration } = require('../middlewares/validationMiddleware');

// POST /api/auth/login - User login
router.post('/login', validateLogin, async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// POST /api/auth/register - User registration
router.post('/register', validateRegistration, async (req, res) => {
    try {
        const userData = req.body;
        await authService.register(userData);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
