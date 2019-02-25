import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsEmail } from "class-validator";
import Ticket from "../tickets/entity";
import Event from "../events/entity";
import Comment from '../comments/entity'

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
  @Column("text")
  password: string;

  @OneToMany(_ => Ticket, ticket => ticket.user)
  tickets: Ticket[];

  @OneToMany(_ => Event, event => event.user)
  events: Event[];

  @OneToMany(_ => Comment, comment => comment.user)
  comments: Comment[];
}
