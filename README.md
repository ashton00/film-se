
## 一、运行

### install

```
npm install
```

### 配置 Mysql Config

需要修改在 Config 目录下面，配置 config.js 的 `mysql` 配置


### 开启程序

```
node app.js
```

## 二、架构

### controller

放置逻辑层面的操作

### model

所有的mysql数据读取以及数据封装都在这里

### routes

路由

### utils

工具函数

提供数据库操作，错误处理，发送数据到前端，还有sha1加密等工具函数

## 三、开发流程

1. 先匹配路由
2. 在对应的controller中写接口逻辑
3. 在model中写需要读取的数据操作，尽量遵循crud的原则
4. 在controller中，将读取的数据，通过utils提供的工具函数统一的发送出去，参考users.js


## API

### 注册

```
POST /api/users/register
```

|字段|类型|
|---|---|
|phone|Number|
|password|String|
|gender(可选)|EUNM('male', 'female')|

返回

```
{
  "time": "2017-06-07T04:23:50.958Z",
  "data": {
    "UserId": 14
  },
  "info": "注册用户成功"
}

```

### 登录

```
POST /api/users/login
```

|字段|类型|
|---|---|
|phone|Number|
|password|String|

返回

```
{
  "time": "2017-06-07T04:23:31.783Z",
  "data": {
    "UserId": 10
  },
  "info": "用户登录成功"
}
```

### 创建电影

```
http://localhost:3333/api/films/
```


```
filmDetail:
      {
        id: 1,
        name: '摔跤吧！爸爸',
        score: '9.1',
        year: 2017,
        type: '剧情',
        area: '印度',
        showTime: '2017-05-05',
        des: '马哈维亚（阿米尔·汗 Aamir Khan 饰）曾经是一名前途无量的摔跤运动员，在放弃了职业生涯后，他最大的遗憾就是没有能够替国家赢得金牌。马哈维亚将这份希望寄托在了尚未出生的儿子身上，哪知道妻子接连给他生了两个女儿，取名吉塔（法缇玛·萨那·纱卡 Fatima Sana Shaikh 饰）和巴比塔（桑亚·玛荷塔 Sanya Malhotra 饰）。让马哈维亚没有想到的是，两个姑娘展现出了杰出的摔跤天赋，让他幡然醒悟，就算是女孩，也能够昂首挺胸的站在比赛场上，为了国家和她们自己赢得荣誉。 ',
        img: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.webp',
        actors: [
          {
            name: '阿米尔',
            profile: 'https://img1.doubanio.com/img/celebrity/medium/13628.jpg'
          },
          {
            name: '涅提·蒂瓦里',
            profile: 'https://img3.doubanio.com/img/celebrity/medium/1484120321.24.jpg'
          }
        ],
        comments: [
          '好看死了。拜托大家认真看完电影再做评论。爸爸有约定一年为期，不行就不勉强。吉塔在赢得了第一场摔跤比赛之后，也主动请爸爸带自己参赛。她们已经自己选择了自己的道路，被父母逼着选了专业还怂着不敢转型的朋友，你跟人家根本没有半点共鸣的好吧。另外，脱离印度实际环境谈女不女权根本没有意义。',
          '在印度看得169分钟，一部处处衬着男权和父权的女性电影，女儿没有任何选择权，被父亲残暴地教育成为世界冠军，这个冠军的“正确“结果就意味着父亲教育的正确了。意外这部电影宣传期在国内口碑这么好，大家去看完整版吧认知会反转的',
          '最惊讶的是放印度国歌的时候电影院几乎所有人都站起来了。。'
        ]
      }
```


```
{
  "time": "2017-06-07T04:22:06.871Z",
  "data": {
    "id": 6
  },
  "info": "创建电影成功"
}
```
