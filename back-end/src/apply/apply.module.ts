import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyController } from './apply.controller';
import { ApplyService } from './apply.service';
import { ApplyEntity } from './entities/apply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplyEntity])],
  controllers: [ApplyController],
  providers: [ApplyService],
})
export class ApplyModule {}
