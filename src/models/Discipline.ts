import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import Hardskill from './Hardskill';
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

    @ManyToMany(() => User)
    @JoinTable()
    teachers: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Discipline;
