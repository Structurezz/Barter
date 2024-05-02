import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(compression()); // Compress response data with gzip compression
app.use(cors()); // Enable CORS for all origins
app.use(helmet()); // Set various HTTP headers for security
app.use(passport.initialize()); // Initialize Passport authentication middleware

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Passport configuration and strategies
// Your Passport configuration code goes here

// Routes setup
// Example routes
app.get('/', (req, res) => {
    res.send('Welcome to the Barter API!');
});

// Add your routes here...

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


export default server; // Export the server instance
