import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm';
import AtividadeAvaliativa from './AtividadeAvaliativa';
import Grupo from './Grupo';
import SoftSkill from './SoftSkill';
import Tarefa from './Tarefa';
import User from './User';

@Entity('avaliacao360')
class Avaliacao360{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => SoftSkill, softSkill => softSkill.avaliacaos360)
    @JoinTable()
    softSkills: SoftSkill[];

    @Column()
    grupo_id: string;

    @ManyToOne(() => Grupo)
    @JoinColumn({name: 'grupo_id'})
    grupo: Grupo;

    @Column()
    atividadeAvaliativa_id: string;

    @ManyToOne(() => AtividadeAvaliativa)
    @JoinColumn({name: 'atividadeAvaliativa_id'})
    atividadeAvaliativa: AtividadeAvaliativa;

    @Column()
    aluno_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'aluno_id'})
    aluno: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Avaliacao360;
