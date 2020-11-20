import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from 'typeorm';
import Avaliacao360 from './Avaliacao360';
import User from './User';

@Entity('softskill')
class SoftSkill{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @ManyToMany(type => Avaliacao360, avaliacao360 => avaliacao360.softSkills, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    avaliacaos360: Avaliacao360[];

    @ManyToMany(type => User, aluno => aluno.softSkills, {
        cascade: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinTable()
    alunos: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default SoftSkill;
