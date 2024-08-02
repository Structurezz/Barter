// middleware/corsMiddleware.js
import cors from 'cors';

export const allowCrossOrigin = cors({
    origin: process.env.CLIENT_ORIGIN || '*',
});
