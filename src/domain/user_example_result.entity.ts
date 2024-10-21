import { Column, Entity, JoinColumn, Long, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserTraining } from "./user_training.entity";
import { UserExample } from "./user_example.entity";

@Unique(['user_training_id', 'user_example_id'])
@Entity()
export class UserExampleResult {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'int', nullable: false })
  user_training_id: Number;

  @Column({ type: 'int', nullable: false })
  user_example_id: Number;

  @Column({ type: 'int', nullable: false })
  approach: Number;

  @Column({ type: 'float64', nullable: false })
  result: Number;

  @Column({ type: 'int', nullable: false })
  count: Number;

  @ManyToOne(() => UserTraining, user_training => user_training)
  @JoinColumn({ name: 'user_training_id' })
  user_training: UserTraining;

  @ManyToOne(() => UserExample, user_example => user_example)
  @JoinColumn({ name: 'user_example_id' })
  user_example: UserExample;
}