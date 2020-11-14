import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'

import Discipline from '../models/Discipline';
import Hardskill from '../models/Hardskill';

interface Request {
    name: string;
    description: string;
}

class CreateHardskillForDisciplineService {

    public async execute({ name, description }: Request): Promise<Hardskill> {
        const hardskillRepository = getRepository(Hardskill);

        const checkHardskillExists = await hardskillRepository.findOne({
            where: { name },
        });

        if (checkHardskillExists) {
            return checkHardskillExists
        }

        const hardskill = hardskillRepository.create({
            name,
            description
        });

        await hardskillRepository.save(hardskill);

        return hardskill;

    }

}

export default CreateHardskillForDisciplineService