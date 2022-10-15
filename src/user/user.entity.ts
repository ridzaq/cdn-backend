import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    skillsets: string;

    @Column()
    hobby: string;
}