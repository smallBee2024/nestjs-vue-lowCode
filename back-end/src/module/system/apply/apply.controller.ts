import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { ApplyService } from './apply.service';
import { AuthGuard } from '@nestjs/passport';
import { ResultFactory } from '../../../utils/index';
// import { query } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('apply')
export class ApplyController {
  constructor(private readonly applyService: ApplyService) {}

  @Post()
  create(@Body() body) {
    return this.applyService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.applyService.findOne(+id);
    console.log('params', id, data);
    return ResultFactory({
      code: 200,
      msg: 'success',
      data,
      success: true,
    });
  }

  @Get()
  async findAll(@Query() query) {
    const data = await this.applyService.findAll();
    console.log('query', query);

    return ResultFactory({
      code: 200,
      msg: 'success',
      data,
      success: true,
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    await this.applyService.update(+id, body.name);
    return ResultFactory({
      code: 200,
      msg: '修改成功！',
      data: null,
      success: true,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.applyService.remove(+id);
    return ResultFactory({
      code: 200,
      msg: '删除成功！',
      data: null,
      success: true,
    });
  }
}
