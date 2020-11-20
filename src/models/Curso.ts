import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import Turma from './Turma';

@Entity('curso')
class Curso{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Turma, turma => turma.cursos)
    @JoinTable()
    turmas: Turma[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Curso;
