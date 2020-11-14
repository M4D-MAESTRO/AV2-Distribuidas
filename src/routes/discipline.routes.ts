import { Router } from 'express';
import { getRepository } from 'typeorm';
import Discipline from '../models/Discipline';
//import DisciplineHardskill from '../models/Discipline_Hardskill';
import Hardskill from '../models/Hardskill';
import CreateDisciplineService from '../services/CreateDisciplineService';
import CreateHardskillForDisciplineService from '../services/CreateHardskillForDisciplineService';
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
        relations: ['hardskills'],
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


disciplineRouter.post('/:id/hardskill', async (request, response) => {
    try {
        const { id } = request.params;

        const disciplineRepository = getRepository(Discipline);
        const hardskillRepository = getRepository(Hardskill);

        const discipline = await disciplineRepository.findOne({
            relations: ['hardskills'],
            where: { id },
        });

        if (!discipline) {
            return response.status(400).json({ error: 'Discipline not found' });
        }

        const { name, description } = request.body;

        const hardskill = new Hardskill();
        hardskill.name = name;
        hardskill.description = description;

        if(!discipline.hardskills){
            discipline.hardskills = [];
        }
        discipline.hardskills.push(hardskill);

        await disciplineRepository.save(discipline);
        
        return response.json(discipline);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

/*
disciplineRouter.post('/:id/hardskill', async (request, response) => {
    try {
        const { id } = request.params;

        const disciplineRepository = getRepository(Discipline);

        const discipline = await disciplineRepository.findOne({
            where: { id }
        });

        if (!discipline) {
            return response.status(400).json({ error: 'Discipline not found' });
        }

        const { name, description } = request.body;

        const createHardskill = new CreateHardskillForDisciplineService();

        const hardskill = await createHardskill.execute({
            name,
            description
        });

        const disciplineHardskillRepository = getRepository(DisciplineHardskill);

        const disciplineHardskill = {
            discipline_id: discipline.id,
            hardskill_id: hardskill.id
        }
        
        await disciplineHardskillRepository.save(disciplineHardskill);

        if(discipline.hardskill){
            discipline.hardskill.concat(hardskill);
        }else{
            discipline.hardskill = [hardskill];
        }
        
        await disciplineRepository.save(discipline);
        
        return response.json(discipline);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});
*/
export default disciplineRouter;
