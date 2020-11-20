import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import Hardskill from './Hardskill';
import Turma from './Turma';
import User from './User';

@Entity('disciplines')
class Discipline {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Hardskill, hardskill => hardskill.disciplines, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    hardskills: Hardskill[];

    @Column({ nullable: true })
    turma_id: string;

    @ManyToOne(() => Turma)
    @JoinColumn({ name: 'turma_id' })
    turma: Turma;

    @ManyToMany(type => User, teacher => teacher.disciplinas, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    teachers: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Discipline;
