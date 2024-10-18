import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { ApplyEntity } from './entities/apply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplyEntity])],
  controllers: [ApplyController],
  providers: [ApplyService],
})
export class ApplyModule {}
