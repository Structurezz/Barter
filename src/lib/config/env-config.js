
const config = {
    development: {
        port: 3000,
        logLevel: 'debug',
    },
    test: {
        port: 3001,
        logLevel: 'info',
    },
    production: {
        port: process.env.PORT || 5000,
        logLevel: 'info',
    },
};

module.exports = config[process.env.NODE_ENV || 'development'];
