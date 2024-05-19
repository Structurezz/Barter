// routes/userRoutes.mjs

import express from 'express';
import * as userController from '../controllers/userController.mjs';

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
// Add other routes as needed

export default router;
