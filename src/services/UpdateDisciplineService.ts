import { getRepository } from 'typeorm';

import Discipline from '../models/Discipline';

interface Request {
    id: string;
    name: string;
    description: string;
}

class UpdateDisciplineService {

    public async execute({ id, name, description }: Request): Promise<Discipline> {
        const disciplineRepository = getRepository(Discipline);

        const checkDisciplineExists = await disciplineRepository.findOne({
            where: { id },
        });

        if (!checkDisciplineExists) {
            throw new Error('Discipline do not exists');
        }

        const checkNameInUse = await disciplineRepository.findOne({
            where: { name },
        });

        if (checkNameInUse) {
            throw new Error('Name already in use.');
        }

        const discipline = disciplineRepository.create({
            name,
            description
        });

        await disciplineRepository.update(id, discipline);

        return discipline;

    }

}

export default UpdateDisciplineService