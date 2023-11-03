import express from 'express'
import { getUsers } from '../../controllers/userController.js';

const router = express.Router();
 
// /api/users
 router.get('/', getUsers)

export default router;