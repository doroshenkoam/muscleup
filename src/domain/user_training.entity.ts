import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserProgram } from "./user_program.entity";

@Unique(['user_program_id', 'created_at'])
@Entity()
export class UserTraining{
  @PrimaryGeneratedColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'int', nullable: false })
  user_program_id: Number;

  @Column({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @ManyToOne(() => UserProgram, user_program => user_program)
  @JoinColumn({ name: 'user_program_id' })
  user_program: UserProgram;
}