import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import Hardskill from './Hardskill';
import Turma from './Turma';

@Entity('atividade_avaliativa')
class AtividadeAvaliativa {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    turma_id: string;

    @ManyToOne(() => Turma)
    @JoinColumn({ name: 'turma_id' })
    turma: Turma;

    @ManyToMany(type => Hardskill, hardskill => hardskill.atividadeAvaliativas, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    hardskills: Hardskill[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default AtividadeAvaliativa;
