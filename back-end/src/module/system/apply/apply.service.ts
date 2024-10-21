import { Injectable } from '@nestjs/common';
// import { CreateApplyDto } from './dto/create-apply.dto';
// import { UpdateApplyDto } from './dto/update-apply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplyEntity } from './entities/apply.entity';

@Injectable()
export class ApplyService {
  constructor(
    @InjectRepository(ApplyEntity)
    private applyRepository: Repository<ApplyEntity>,
  ) {}

  async create({
    appType,
    appName,
    publishStatus,
    createTime,
  }: {
    appType: string;
    appName: string;
    publishStatus: number;
    createTime: string;
  }): Promise<ApplyEntity> {
    const newUser = this.applyRepository.create({
      appType,
      appName,
      publishStatus,
      createTime,
    });
    return this.applyRepository.save(newUser);
  }

  findAll() {
    return this.applyRepository.find();
  }

  findOne(id: number) {
    return this.applyRepository.findOne({
      where: { id },
    });
  }

  // 通过id，name修改数据
  update(id: number, appName: string) {
    return this.applyRepository.update({ id }, { appName });
  }

  remove(id: number) {
    return this.applyRepository.delete({ id });
  }
}
