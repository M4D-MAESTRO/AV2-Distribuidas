import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Questao from './Questao';
import User from './User';

@Entity('questao_dia')
class QuestaoDia{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    aluno_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'aluno_id'})
    aluno: User;

    @Column()
    questao_id: string;

    @ManyToOne(() => Questao)
    @JoinColumn({name: 'questao_id'})
    questao: Questao;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default QuestaoDia;
