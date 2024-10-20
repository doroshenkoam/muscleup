import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Long } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ name: 'id' })
  id: Long;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'bool', nullable: true })
  deleted_at?: Date;
}