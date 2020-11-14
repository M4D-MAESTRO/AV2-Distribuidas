import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
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

    @ManyToMany(() => Hardskill)
    @JoinTable()
    hardskill_id: Hardskill[];

    @ManyToMany(() => User)
    @JoinTable()
    teacher_id: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Discipline;
