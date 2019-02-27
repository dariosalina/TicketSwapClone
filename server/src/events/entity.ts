import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString } from "class-validator";
import Ticket from "../tickets/entity";
import User from "../users/entity";

@Entity()
export default class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text", { nullable: false })
  name: string;

  @IsString()
  @Column("text", { nullable: false })
  description: string;

  @Column("text", { nullable: false })
  start_date: string;

  @Column("text", { nullable: false })
  end_date: string;

  @OneToMany(_ => Ticket, ticket => ticket.event, { eager: true })
  tickets: Ticket[];

  @ManyToOne(_ => User, user => user.events, { eager: true })
  user: User;
}
