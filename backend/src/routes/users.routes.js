import { Router } from 'express';
import * as controller from '../controllers/users.controller.js';

const usersRoutes = Router();

usersRoutes.get('/', controller.getAllUsers);
usersRoutes.get('/:id', controller.getUserById);
usersRoutes.post('/', controller.addUser);
usersRoutes.put('/:id', controller.updateUserById);
usersRoutes.delete('/:id', controller.deleteUserById);

export default usersRoutes;
