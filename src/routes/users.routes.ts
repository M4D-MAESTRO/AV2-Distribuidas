import { Router } from 'express';

import CreateUserService from '../services/CreateUserService'

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password, type } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
            type
        });

        delete user.password;

        return response.json(user);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

export default usersRouter;
