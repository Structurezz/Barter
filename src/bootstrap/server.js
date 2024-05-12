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


// CORS configuration
const allowedOrigins = ['http://localhost:27017']; // Add your client's URL
app.use(cors({
    origin: function(origin, callback) {
        // Check if the request origin is in the allowed list
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Enable CORS with credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Specify allowed methods
}));


// MongoDB connection

const connectWithRetry = () => {
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        console.log('Retrying connection after 5 seconds...');
        setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
    });
};

// Call the connectWithRetry function to initiate the initial connection attempt
connectWithRetry();

// Passport configuration and strategies
// Your Passport configuration code goes here

// Routes setup
// Example routes
app.get('/', (req, res) => {
    res.send('Welcome to the Barter API!');
});

// Add your routes here...

// Start server
const port = process.env.PORT || 27017;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


export  {server}; // Export the server instance
