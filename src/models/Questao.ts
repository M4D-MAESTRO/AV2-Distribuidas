import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Hardskill from './Hardskill';
import User from './User';

@Entity('questao')
class Questao{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    hardskill_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'hardskill_id'})
    hardskill: Hardskill;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Questao;
