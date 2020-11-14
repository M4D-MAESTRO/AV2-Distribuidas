import { Router } from 'express';
import disciplineRouter from './discipline.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/disciplines', disciplineRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;