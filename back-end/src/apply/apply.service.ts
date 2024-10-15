import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplyEntity } from './entities/apply.entity';

export interface PostsRo {
  list: ApplyEntity[];
  count: number;
}

@Injectable()
export class ApplyService {
  constructor(
    @InjectRepository(ApplyEntity)
    private readonly applyRepository: Repository<ApplyEntity>,
  ) {}

  // 获取文章列表
  async findAll(query): Promise<PostsRo> {
    const qb = await this.applyRepository.createQueryBuilder('apply');
    qb.where('1 = 1');
    qb.orderBy('apply.createTime', 'DESC');

    const count = await qb.getCount();
    const { pageNum = 1, pageSize = 10 } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const posts = await qb.getMany();
    return { list: posts, count: count };
  }
}
