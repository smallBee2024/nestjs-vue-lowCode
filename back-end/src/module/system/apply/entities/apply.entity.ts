import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apply')
export class ApplyEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '参数主键' })
  id: number;

  @Column({ type: 'varchar', name: 'appType', length: 100 })
  appType: string;

  @Column({ type: 'varchar', name: 'appName', length: 100, comment: '应用名' })
  appName: string;

  @Column({ type: 'int', name: 'publishStatus', comment: '发布状态' })
  publishStatus: number;

  @Column({ type: 'varchar', name: 'createTime', comment: '创建时间' })
  createTime: string;
}
