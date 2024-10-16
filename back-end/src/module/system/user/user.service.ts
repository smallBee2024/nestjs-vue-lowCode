import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(
    name: string,
    password: string,
    avator: string,
    moment: string,
  ): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({
      name,
      password: hashedPassword,
      avator,
      moment,
    });
    return this.usersRepository.save(newUser);
  }

  async findOne(name: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ where: { name } });
  }
}
