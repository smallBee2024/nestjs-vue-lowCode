import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(name: string, password: string): Promise<any> {
    // console.log(name, password);
    const user = await this.userService.findOne(name);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(name: string, password: string) {
    return this.userService.create(
      name,
      password,
      '',
      moment().format('YYYY-MM-DD HH:mm:ss'),
    );
  }

  async getUser(name: string) {
    return this.userService.findOne(name);
  }
}
