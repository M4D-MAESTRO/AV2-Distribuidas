import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import Avaliacao360 from './Avaliacao360';
import Grupo from './Grupo';
import User from './User';

@Entity('tarefa')
class Tarefa {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Grupo, grupo => grupo.tarefas, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    grupos: Grupo[];

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

export default Tarefa;
