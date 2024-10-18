# Daily Note

## 2024-10-18

**Restful Api 编写：**

开发了apply应用的 增、查接口；`实现接口的编写`

**数据库基本操作：**

- mysql基本操作熟悉：创建库、表、字段

- 项目中mysql文件`.sql`的初始化

  > <u>项目中如何新增表字段、迁移等问题 ❓</u>

- Typeorm 概念及基本使用



## 2024-10-17

- 前端整体页面布局

- 引入pinia

## 2024-10-16

### back-end login & register

开发了登录注册功能：JWT鉴权、登录注册用户数据的存储

开发过程中很多东西还是不甚了解：

- module
- controller
- service
- provider
- import
- export

这几个的概念及使用，还需要进一步深入学习；

> @nestjs/common、@nestjs/jwt、@nestjs/passport、passport-jwt、@nestjs/typeorm、typeorm

以上这些包，熟悉

## 2024-10-15

### login & register

`注：认真使用ts定义类型`

**已实现：**

- 简单的用户名、密码登录获取token
- 路由跳转

<font color="red">**登录注册功能待补充：**</font>

- 账号密码强度校验
- 验证：图片验证码、手机验证码
- 二维码扫描登录
- 第三方登录

后端预计采用jwt登录（待开发）

------

完成：在项目中添加了公用ts定义包：`package/types`内；