import {
  // Body,
  Controller,
  // Delete,
  Get,
  // Param,
  // Post,
  // Put,
  Query,
} from '@nestjs/common';
import { ApplyService } from './apply.service';

@Controller('apply')
export class ApplyController {
  constructor(private readonly ApplyService: ApplyService) {}
  /**
   * 获取所有文章
   */
  @Get()
  async findAll(@Query() query): Promise<any> {
    return await this.ApplyService.findAll(query);
  }
}
