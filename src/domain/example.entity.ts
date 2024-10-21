import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ExampleType } from './example_type.entity';

@Unique(['name'])
@Entity()
export class Example {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'varchar', nullable: false })
  name: String;

  @Column({ type: 'int', nullable: false })
  example_type_id: Number;

  @Column({ type: 'varchar', nullable: false })
  equipment: String;

  @ManyToOne(() => ExampleType, example_type => example_type)
  @JoinColumn({ name: 'example_type_id' })
  example_type: ExampleType;
}