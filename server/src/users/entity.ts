import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsEmail, MinLength } from "class-validator";
import { Exclude } from "class-transformer";
import Ticket from "../tickets/entity";
import Event from "../events/entity";
import Comment from "../comments/entity";
import * as bcrypt from "bcrypt";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text", { nullable: false })
  first_name: string;

  @IsString()
  @Column("text", { nullable: false })
  last_name: string;

  @IsEmail()
  @Column("text", { nullable: false })
  email: string;

  // password to be finished, authentication to be done
  @IsString()
  @MinLength(5)
  @Column("text", { nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;
  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }

  @OneToMany(_ => Ticket, ticket => ticket.user)
  tickets: Ticket[];

  @OneToMany(_ => Event, event => event.user)
  events: Event[];

  @OneToMany(_ => Comment, comment => comment.user)
  comments: Comment[];
}
