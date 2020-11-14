import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'

import Discipline from '../models/Discipline';

interface Request {
    name: string;
    description: string;
}

class CreateDisciplineService {

    public async execute({ name, description }: Request): Promise<Discipline> {
        const disciplineRepository = getRepository(Discipline);

        const checkDisciplineExists = await disciplineRepository.findOne({
            where: { name },
        });

        if (checkDisciplineExists) {
            throw new Error('Name already in use.');
        }

        const discipline = disciplineRepository.create({
            name,
            description
        });

        await disciplineRepository.save(discipline);

        return discipline;

    }

}

export default CreateDisciplineService