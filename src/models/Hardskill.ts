import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import AtividadeAvaliativa from './AtividadeAvaliativa';
import Discipline from './Discipline';
import Turma from './Turma';

@Entity('hardskills')
class Hardskill {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Discipline, discipline => discipline.hardskills)
    @JoinTable()
    disciplines: Discipline[];

    @ManyToMany(type => AtividadeAvaliativa, atividadeAvaliativa => atividadeAvaliativa.hardskills)
    @JoinTable()
    atividadeAvaliativas: AtividadeAvaliativa[];

    @ManyToMany(type => Turma, turma => turma.hardskills)
    @JoinTable()
    turmas: Turma[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Hardskill;
