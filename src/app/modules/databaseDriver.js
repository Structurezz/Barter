const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

// Example usage: Create a new user
const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
newUser.save()
    .then(() => console.log('User created successfully'))
    .catch(err => console.error('Error creating user:', err));
