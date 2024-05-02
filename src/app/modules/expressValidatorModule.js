
const { body, validationResult } = require('express-validator');

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
