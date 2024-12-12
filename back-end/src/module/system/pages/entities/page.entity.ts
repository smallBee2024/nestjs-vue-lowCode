import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('page')
export class PageEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '参数主键' })
  id: number;

  @Column({ type: 'varchar', name: 'pageName', length: 100 })
  pageName: string;

  @Column({ type: 'varchar', name: 'pageType', length: 100 })
  pageType: string;

  @Column({ type: 'int', name: 'appId', comment: '应用id' })
  appId: number;

  @Column({ type: 'varchar', name: 'createTime', comment: '创建时间' })
  createTime: string;

  @Column({ type: 'varchar', name: 'pageId', comment: '页面id' })
  pageId: string;
}
