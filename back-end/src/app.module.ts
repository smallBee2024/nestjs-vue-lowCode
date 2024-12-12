import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import envConfig from '../config/env';
import { AuthModule } from './module/system/auth/auth.module';
// import { UserModule } from './module/system/user/user.module';
// 引入 apply模块
import { ApplyModule } from './module/system/apply/apply.module';
// 引入 pages模块
import { PagesModule } from './module/system/pages/pages.module';

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
    AuthModule,
    // UserModule,
    ApplyModule,
    PagesModule,
  ],
  providers: [],
})
export class AppModule {}
