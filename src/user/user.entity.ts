import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('user')

export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    email: string;

    @CreateDateColumn()
    created_on: Date;
}