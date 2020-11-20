import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import Curso from './Curso';
import Discipline from './Discipline';
import Grupo from './Grupo';
import SoftSkill from './SoftSkill';
import Turma from './Turma';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    type: string;

    @Column()
    password: string;

    @ManyToMany(type => Turma, turma => turma.users)
    @JoinTable()
    turmas: Turma[];

    @ManyToMany(type => SoftSkill, softSkill => softSkill.alunos)
    @JoinTable()
    softSkills: SoftSkill[];

    @ManyToMany(type => Grupo, grupo => grupo.alunos)
    @JoinTable()
    grupos: Grupo[];

    @ManyToMany(type => Discipline, discipline => discipline.teachers)
    @JoinTable()
    disciplinas: Discipline[];

    @Column({ nullable: true })
    curso_id: string;

    @ManyToOne(() => Curso)
    @JoinColumn({ name: 'curso_id' })
    curso: Curso;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default User;
