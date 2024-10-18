import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApplyService } from './apply.service';
import { AuthGuard } from '@nestjs/passport';
import { ResultFactory } from '../../../utils/index';

@UseGuards(AuthGuard('jwt'))
@Controller('apply')
export class ApplyController {
  constructor(private readonly applyService: ApplyService) {}

  @Post()
  create(@Body() body) {
    return this.applyService.create(body);
  }

  @Get()
  async findAll() {
    const data = await this.applyService.findAll();
    console.log(data);

    return ResultFactory({
      code: 200,
      msg: 'success',
      data,
      success: true,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplyDto: any) {
    console.log('updateApplyDto==', updateApplyDto);
    return {};
    // return this.applyService.update(+id, updateApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applyService.remove(+id);
  }
}
