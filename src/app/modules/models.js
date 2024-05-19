
// models/User.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    // Add other fields as needed
});

const User = model('User', userSchema);

export default User;
