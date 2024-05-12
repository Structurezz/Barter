import mongoose from 'mongoose';

// Define the MongoDB connection string
const uri = 'mongodb://localhost:27017';

// Function to connect to the MongoDB database
async function connectToDatabase() {
    try {
        // Check if the URI is defined
        if (!uri) {
            throw new Error('MongoDB URI is not defined.');
        }

        // Connect to MongoDB using the provided URI
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}


// Function to close the database connection
async function closeDatabase() {
  try {
    // Close the Mongoose connection
    await mongoose.connection.close();
    console.log("Closed the database connection");
  } catch (error) {
    console.error("Error closing the database connection:", error);
    throw error;
  }
}

export { connectToDatabase, closeDatabase };
