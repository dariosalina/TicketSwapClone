import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsEmail } from "class-validator";
import Ticket from "../tickets/entity";
import Event from "../events/entity";

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

  password;

  @OneToMany(_ => Ticket, ticket => ticket.event, { eager: true })
  tickets: Ticket[];

  @OneToMany(_ => Event, event => event.tickets, { eager: true })
  event: Event;

  @OneToMany(_ => Comment, comment => comment.ticket, { eager: true })
  comment: Comment;
}
