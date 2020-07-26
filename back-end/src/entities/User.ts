import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Unique,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Length } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Customer } from "./Customer";

@Entity()
@Unique(["email"])
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 60)
  name: string;

  @Column()
  @Length(4, 60)
  email: string;

  @Column()
  @Length(4, 60)
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Customer, (customer) => customer.user)
  customers: Customer[]

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
