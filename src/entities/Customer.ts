import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    Unique,
    ManyToOne,
  } from "typeorm";
  import { Length } from "class-validator";
import { User } from "./User";

  @Entity()
  @Unique(["id"])
  export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 60)
    name: string;

    @Column()
    @Length(12, 15)
    telephone: string;

    @Column()
    @Length(5, 100)
    address: string;

    @Column()
    @Length(2, 50)
    number: number;
    
    @Column()
    @Length(3, 120)
    city: string;

    @Column()
    @Length(4, 60)
    state: string;

    @Column()
    @Length(4, 50)
    nation: string;

    @Column()
    @Length(4, 30)
    cep: string;

    @ManyToOne((type) => User, (user) => user.customers)
    user: User;
  }