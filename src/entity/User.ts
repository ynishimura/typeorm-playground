import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({ nullable: true } )
    email?: string | null;

}
