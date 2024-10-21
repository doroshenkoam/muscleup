import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Unique(['name'])
@Entity()
export class ExampleType {
  @PrimaryColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'varchar', nullable: false })
  name: String;
}