// services/userService.js
const User = require('../models/User');

class UserService {
    async createUser(userData) {
        try {
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async getUserById(userId) {
        try {
            return await User.findById(userId);
        } catch (error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }

    async updateUser(userId, userData) {
        try {
            return await User.findByIdAndUpdate(userId, userData, { new: true });
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    async deleteUser(userId) {
        try {
            return await User.findByIdAndDelete(userId);
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }

    // Add other user-related methods as needed
}

module.exports = new UserService();
