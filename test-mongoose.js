import mongoose from 'mongoose';

// MongoDB connection URI for local instance
const uri = 'mongodb://localhost:27017/barter-api';

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));
