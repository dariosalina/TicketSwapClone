import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsInt } from "class-validator";
import User from "../users/entity";
import Event from "../events/entity";
import Comment from "../comments/entity";

@Entity()
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text", { nullable: false })
  picture: string;

  @IsInt()
  @Column('integer', { nullable: false })
  price: number;

  @IsString()
  @Column("text", { nullable: false })
  description: string;

  @ManyToOne(_ => Event, event => event.tickets)
  event: Event;

  @ManyToOne(_ => User, user => user.tickets, { eager: true })
  user: User;

  @OneToMany(_ => Comment, comment => comment.ticket, { eager: true })
  comments: Comment[];
}
