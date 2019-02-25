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
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text", { nullable: false })
  comment: string;

  @ManyToOne(_ => User, user => user.event, { eager: true })
  user: User;

  @OneToMany(_ => Ticket, ticket => ticket.event, { eager: true })
  tickets: Ticket[];
}
