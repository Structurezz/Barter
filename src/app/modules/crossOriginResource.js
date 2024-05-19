// app.mjs

import express from 'express';
import cors from 'cors';

const app = express();

// Use CORS middleware
app.use(cors());

export default app;
