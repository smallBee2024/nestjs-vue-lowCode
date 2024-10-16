import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '参数主键' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: 20 })
  name: string;

  @Column({ type: 'varchar', name: 'password', length: 100 })
  password: string;

  @Column({ type: 'varchar', name: 'avator' })
  avator: string;

  @Column({ type: 'date', name: 'moment', comment: '注册时间' })
  moment: Date;
}
