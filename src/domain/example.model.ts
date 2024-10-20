import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Unique(['name'])
@Entity()
export class Example {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ nullable: false })
  example_type_id: Number;

  // TODO:
}