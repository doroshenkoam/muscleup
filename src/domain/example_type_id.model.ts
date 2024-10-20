import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ name: 'id' })
  id: Number;

  @Column({ type: 'text', nullable: false })
  name: string;
}