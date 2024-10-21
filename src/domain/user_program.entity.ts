import { Column, Entity, JoinColumn, Long, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "./user.entity";

@Unique(['user_id', 'name'])
@Entity()
export class UserProgram {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: Number;

  @Column({ type: 'bigint', nullable: false })
  user_id: Long;

  @Column({ type: 'varchar', nullable: false })
  name: String;

  @ManyToOne(() => User, user => user)
  @JoinColumn({ name: 'user_id' })
  user: User;
}