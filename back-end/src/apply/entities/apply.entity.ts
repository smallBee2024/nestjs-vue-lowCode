import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apply')
export class ApplyEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '参数主键' })
  public id: number; // 标记为主列，值自动生成

  @Column({
    type: 'varchar',
    name: 'appName',
    length: 100,
    default: '',
    comment: '应用名称',
  })
  public appName: string;

  @Column({ type: 'varchar', name: 'appType', length: 20 })
  appType: string;

  @Column({ type: 'int', name: 'publishStatus', default: 0 })
  publishStatus: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;
}
