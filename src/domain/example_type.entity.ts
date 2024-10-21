import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Unique(['name'])
@Entity()
export class ExampleType {
  @PrimaryColumn({ type: 'int' })
  id: Number;

  @Column({ type: 'varchar', nullable: false })
  name: String;
}