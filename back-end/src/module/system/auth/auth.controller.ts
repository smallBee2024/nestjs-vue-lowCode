// auth/auth.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { ResultFactory } from '../../../utils/index';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() req) {
    const user = await this.authService.validateUser(req.name, req.password);
    // console.log(user);
    if (!user) {
      return ResultFactory({
        code: 401,
        msg: '用户名或密码错误',
        data: null,
        success: false,
      });
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() req) {
    return this.authService.register(req.name, req.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  getUserByName(@Query() req) {
    return this.authService.getUser(req.name);
  }
}
