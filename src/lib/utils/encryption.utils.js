const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10; // Adjust the number of salt rounds as needed for security

async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return hashedPassword;
    } catch (error) {
        // Handle error if hashing fails
        console.error('Error occurred while hashing password:', error);
        throw new Error('Password hashing failed');
    }
}

async function comparePassword(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (error) {
        // Handle error if comparison fails
        console.error('Error occurred while comparing password:', error);
        throw new Error('Password comparison failed');
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    // Export other encryption functions if any
};
