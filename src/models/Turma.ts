import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import Curso from './Curso';
import Grupo from './Grupo';
import Hardskill from './Hardskill';
import User from './User';

@Entity('turma')
class Turma{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Curso, curso => curso.turmas)
    @JoinTable()
    cursos: Curso[];

    @ManyToMany(type => User, user => user.turmas)
    @JoinTable()
    users: User[];

    @ManyToMany(type => Hardskill, hardskill => hardskill.turmas)
    @JoinTable()
    hardskills: Hardskill[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Turma;
