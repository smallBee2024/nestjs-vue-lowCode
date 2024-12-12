import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
// 引入entry
import { PageEntity } from './entities/page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageEntity])],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
