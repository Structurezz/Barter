
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

logger.log('info', 'Hello, Winston!');
logger.log('error', 'Oops! Something went wrong.');
