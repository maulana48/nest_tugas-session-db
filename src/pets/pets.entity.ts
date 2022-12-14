import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @ManyToOne(() => Users, user => user.pets)
    owner: Users;
}