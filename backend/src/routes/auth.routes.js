import { Router } from 'express';
import * as controller from '../controllers/auth.controller.js';

const authRoutes = Router();

authRoutes.post('/login', controller.login);

export default authRoutes;
