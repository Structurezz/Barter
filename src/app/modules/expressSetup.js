
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Define routes and middleware here

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
