# DTO（Data Transfer Object）数据传输对象

DTO，即Data Transfer Object，是一种设计模式，用于在不同的软件系统层之间传输数据

## 作用：

1. **数据验证**：通过在控制器中使用类验证器（如`class-validator`库），可以在接收数据之前确保数据符合预期格式。这可以帮助你避免处理无效数据，并减少错误的可能性。
2. **数据抽象**：DTO允许你在不同层次间传输数据时隐藏内部表示细节。这意味着服务或存储层不需要知道关于请求/响应对象的具体信息，只需要处理DTO提供的数据。
3. **安全增强**：通过仅暴露必要的属性给客户端，DTO有助于防止敏感信息泄露。你可以控制哪些字段应该被序列化发送给用户，从而增加安全性。
4. **提高代码可读性与可维护性**：明确地定义了输入输出结构后，其他开发者更容易理解各个部分是如何交互工作的。当需求变更时，也更容易调整相关逻辑而不影响整个系统。
5. **标准化API响应**：利用DTO，可以为你的RESTful API创建统一且一致的响应格式。这不仅提升了用户体验，也让前端开发更加方便快捷。
6. **支持多平台兼容性**：如果你的应用程序需要同时支持Web、移动等多种客户端，那么合理设计的DTO能够帮助简化跨平台通信过程中的复杂度问题。

总之，在NestJS项目中采用DTO是构建健壮、高效且易于扩展的服务端应用的好实践之一。它们促进了良好的架构原则，比如关注点分离、单一职责等，同时也提高了软件的整体质量

## 使用：

需要安装相关依赖：`class-validator`、`class-transformer`

```bash
npm i class-validator class-transformer
```

它们分别的作用？