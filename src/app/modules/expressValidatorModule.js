// app.js

import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.post('/user', [
    // Validate and sanitize fields
    body('username').trim().isLength({ min: 5 }),
    body('email').isEmail().normalizeEmail(),
], (req, res) => {
    // Process request and handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Save user to the database
});

export default app;
