import { Router } from 'express';
import { getRepository } from 'typeorm';
import Discipline from '../models/Discipline';
import CreateDisciplineService from '../services/CreateDisciplineService';
import DeleteDisciplineService from '../services/DeleteDisciplineService';
import UpdateDisciplineService from '../services/UpdateDisciplineService';

const disciplineRouter = Router();

disciplineRouter.get('/', async (request, response) => {
    const disciplineRepository = getRepository(Discipline);
    const discipline = await disciplineRepository.find();

    return response.json(discipline);
});

disciplineRouter.get('/:id', async (request, response) => {
    const { id } = request.params;

    const disciplineRepository = getRepository(Discipline);

    const discipline = await disciplineRepository.findOne({
        where: { id }
    });

    return response.json(discipline);
});

disciplineRouter.post('/', async (request, response) => {
    try {
        const { name, description } = request.body;

        const createDiscipline = new CreateDisciplineService();

        const discipline = await createDiscipline.execute({
            name,
            description
        });

        return response.json(discipline);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

disciplineRouter.put('/', async (request, response) => {
    try {
        const { id, name, description } = request.body;

        const updateDiscipline = new UpdateDisciplineService();

        const discipline = await updateDiscipline.execute({
            id,
            name,
            description
        });

        return response.json(discipline);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

disciplineRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const deleteDicipline = new DeleteDisciplineService();
        await deleteDicipline.execute({
            id
        });

        return response.json({ response: "deleted" });
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

export default disciplineRouter;
