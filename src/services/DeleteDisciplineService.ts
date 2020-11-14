import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'
import Discipline from '../models/Discipline';

interface Request {
    id: string;
}

class DeleteDisciplineService {

    public async execute({ id }: Request): Promise<void> {
        const disciplineRepository = getRepository(Discipline);

        const checkDisciplineExists = await disciplineRepository.findOne({
            where: { id },
        });

        if (!checkDisciplineExists) {
            throw new Error('Discipline not found');
        }

        await disciplineRepository.delete(id);
    }


}

export default DeleteDisciplineService