
## Run

### install

```
npm install
```

### 配置 Mysql Config

需要修改在 Config 目录下面，配置 config.js 的 `mysql` 配置


### 运行

```
node app.js
```

## 架构

### controller

放置逻辑层面的操作

### model

所有的mysql数据读取以及数据封装都在这里

### routes

路由

### utils

工具函数

提供数据库操作，错误处理，发送数据到前端，还有sha1加密等工具函数

## 开发流程

1、先匹配路由
2、在对应的controller中写接口逻辑
3、在model中写需要读取的数据操作，尽量遵循crud的原则
4、在controller中，将读取的数据，通过utils提供的工具函数统一的发送出去，参考users.js
