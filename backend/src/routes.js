import { Router } from 'express';
import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);

export default routes;
