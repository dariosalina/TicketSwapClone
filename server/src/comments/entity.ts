import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString } from "class-validator";
import Ticket from "../tickets/entity";
import User from "../users/entity";

@Entity()
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text", { nullable: false })
  comment: string;

  @ManyToOne(_ => User, user => user.comments, { eager: true })
  user: User;
  

  @ManyToOne(_ => Ticket, ticket => ticket.comments)
  ticket: Ticket;
}
