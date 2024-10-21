import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProgram } from "./user_program.entity";

@Entity()
export class UserExample {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: Number;

  @Column({ type: 'int', nullable: false })
  user_program_id: Number;

  @Column({ type: 'int', nullable: false })
  example_id: Number;

  @ManyToOne(() => UserProgram, user_program => user_program)
  @JoinColumn({ name: 'user_program_id' })
  user_program: UserProgram;
}