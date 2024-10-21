import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Long } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: Long;

  @Column({ type: 'varchar', nullable: false })
  name: String;

  @Column({ type: 'bool', nullable: false })
  confirmed: Boolean;

  @Column({ type: 'timestamptz', nullable: true })
  deleted_at?: Date;
}