# typeorm



## 一、做什么的



## 二、怎么用

首先安装相关包：

```bash
npm i @nestjs/typeorm typeorm
```

### 2.1 简单使用配置

#### 2.1.1 连接数据库

在app.module.ts中配置数据库连接

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import envConfig from '../config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局
      envFilePath: [envConfig.path],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql', // 数据库类型
        // entities: [], // 数据表实体
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 3306), // 端口号
        username: configService.get('DB_USER', 'root'), // 用户名
        password: configService.get('DB_PASSWORD', '12345678'), // 密码
        database: configService.get('DB_DATABASE', 'nodesql'), //数据库名
        timezone: '+08:00', //服务器上配置的时区
        synchronize: false, //根据实体自动创建数据库表， 生产环境建议关闭
      }),
    }),
  ],
  providers: [],
})
export class AppModule {}
```

#### 2.1.2 配置实体 Entity

在相应的模块中配置Entity

```ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '参数主键' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: 20 })
  name: string;

  @Column({ type: 'varchar', name: 'password', length: 100 })
  password: string;

  @Column({ type: 'varchar', name: 'avator' })
  avator: string;

  @Column({ type: 'date', name: 'moment', comment: '注册时间' })
  moment: Date;
}
```

#### 2.1.3 在控制器对应的Module中添加配置

在users模块中的`users.module.ts`中配置

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

#### 2.1.4 在服务里面使用@InjectRepository获取数据库Model实现操作数据库

在users模块中 `users.service.ts` 中使用

```ts
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
```

### 2.2 增删改查操作

#### 例子：

```ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  // 增 save方法
  async create(
    name: string,
    password: string,
    avator: string,
    moment: string,
  ): Promise<UserEntity> {
    // 构建一条数据
    const newUser = this.usersRepository.create({
      name,
      password,
      avator,
      moment,
    });
    // 保存这条数据
    return this.usersRepository.save(newUser);
  }
	
  // 删
  // 更新
  // 查询数据 findOne、
  async findOne(name: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ where: { name } });
  }
}
```

