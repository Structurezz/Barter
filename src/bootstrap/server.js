import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MONGODB_URI, PORT } from '../lib/config/appConfig.js'; 

dotenv.config(); 

const jwtSecret = process.env.JWT_SECRET;

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
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Call the connectWithRetry function to initiate the initial connection attempt


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
    console.log(`Server is running on port 📢  ${port}`);
});


export  {server, app}; // Export the server instance
