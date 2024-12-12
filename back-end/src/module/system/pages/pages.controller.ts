import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  async create(@Body() createPageDto: CreatePageDto) {
    console.log(createPageDto);
    const user = plainToClass(CreatePageDto, createPageDto);
    const errors = await validate(user);

    if (errors.length > 0) {
      // 处理错误
      console.error(errors);
      return {
        code: 400,
        msg: '创建失败！',
        data: null,
        success: false,
      };
    } else {
      // 数据有效，继续处理...
      const data = this.pagesService.create(createPageDto);
      return {
        code: 200,
        msg: '创建成功！',
        data,
        success: true,
      };
    }
  }

  @Get()
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(+id, updatePageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagesService.remove(+id);
  }
}
