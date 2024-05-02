

/**
 * Validate email format.
 * @param {string} email - Email address to validate.
 * @returns {boolean} - Returns true if the email format is valid, otherwise false.
 */
function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password strength.
 * @param {string} password - Password to validate.
 * @returns {boolean} - Returns true if the password strength is valid, otherwise false.
 */
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
