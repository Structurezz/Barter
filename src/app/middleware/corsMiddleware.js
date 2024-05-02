
// middleware/corsMiddleware.js
const cors = require('cors');

exports.allowCrossOrigin = cors({
    origin: process.env.CLIENT_ORIGIN || '*',
});
