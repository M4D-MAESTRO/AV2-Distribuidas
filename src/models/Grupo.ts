import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import AtividadeAvaliativa from './AtividadeAvaliativa';
import Tarefa from './Tarefa';
import Turma from './Turma';
import User from './User';

@Entity('grupo')
class Grupo{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    turma_id: string;

    @ManyToOne(() => Turma)
    @JoinColumn({name: 'turma_id'})
    turma: Turma;

    @Column()
    atividadeAvaliativa_id: string;

    @ManyToOne(() => AtividadeAvaliativa)
    @JoinColumn({name: 'atividadeAvaliativa_id'})
    atividadeAvaliativa: AtividadeAvaliativa;

    @ManyToMany(type => User, aluno => aluno.grupos)
    @JoinTable()
    alunos: User[];

    @ManyToMany(type => Tarefa, tarefa => tarefa.grupos)
    @JoinTable()
    tarefas: Tarefa[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Grupo;
