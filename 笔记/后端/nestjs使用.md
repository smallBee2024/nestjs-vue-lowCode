# Use nestjs

## 面向对象理解：





## Controllers 控制器

**路由控制**

**装饰器：**

`@Controller`

```ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class App {
  constrator() {}
}
```

## providers 提供者

提供者的主要思想是它可以作为**依赖项注入**

#### service服务

服务主要负责数据的存储和检索。