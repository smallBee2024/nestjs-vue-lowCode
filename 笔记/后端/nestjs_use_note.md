# Use nestjs

### 面向对象理解：





### Controllers 控制器

### providers 提供者

提供者的主要思想是它可以作为**依赖项注入**

### service服务

服务主要负责数据的存储和检索。



### DTO

[dto介绍](https://juejin.cn/post/7364418751482216482?searchId=20241023094215882107CA0AEE3D558029)



## 知识点记录

允许nestjs跨域、全局路由前缀

```ts
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.enableCors(); // 允许跨域
  await app.listen(8080);
}
bootstrap();
```

