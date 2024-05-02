

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger;

// Validation Utility (validation.utils.js)

function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Password strength validation
    // For example: Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
}

// Other validation functions can be added here...

module.exports = {
    validateEmail,
    validatePassword,
    // Export other validation functions
};
