const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests from specific origins
        const allowedOrigins = ['http://example.com', 'http://localhost:3000'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow additional HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Allow additional headers
    credentials: true, // Allow credentials to be sent with requests
    maxAge: 3600, // Specify the max age (in seconds) for preflight requests
    optionsSuccessStatus: 200, // Specify the success status code for preflight requests
    preflightContinue: false, // Disable preflight caching
    // Add other CORS configurations as needed
};

const securityOptions = {
    hidePoweredBy: { setTo: 'PHP 4.2.0' }, // Hide the X-Powered-By header
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", 'example.com'], // Define default source for resources
            scriptSrc: ["'self'", 'trustedscripts.com'], // Define trusted sources for scripts
            styleSrc: ["'self'", 'trustedstyles.com'], // Define trusted sources for styles
            imgSrc: ['data:', 'images.com'], // Define allowed sources for images
            objectSrc: ["'none'"], // Disallow object sources
            upgradeInsecureRequests: true, // Upgrade insecure requests to HTTPS
            blockAllMixedContent: true, // Block all mixed content
        },
    },
    referrerPolicy: { policy: 'no-referrer' }, // Set the Referrer-Policy header to prevent sending referrer information
    featurePolicy: {
        features: {
            geolocation: ["'none'"], // Disable geolocation API
            microphone: ["'none'"], // Disable microphone API
            camera: ["'none'"], // Disable camera API
        },
    },
    // Add other security headers and configurations as needed
};

module.exports = {
    corsOptions,
    securityOptions,
    // Add other security configurations
};
