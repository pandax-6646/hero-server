## 1、后台接口地址

### 人物列表接口 http://localhost:3000/list

### 人物详情接口 http://localhost:3000/detail

### 添加人物接口 http://localhost:3000/push

### 修改人物详情接口 http://localhost:3000/edit

### 删除人物接口 http://localhost:3000/delete

## 2、项目目录

- serve ----- 后台部分

  - utils ----- 工具函数
    - corsFn ----- 跨域中间件方法
    - mongo ----- 启动数据库方法
    - params ---- 处理请求参数方法
  - app ----- 启动文件
  - router ----- 路由

- web 前台部分
  - images ----- 静态图片
  - js ----- 各个页面用到的 js
  - moke ----- 初始化数据库的数据
  - style ----- 样式文件
    - css ----- less 解析的文件
    - less ----- 各个页面的样式
  - 静态页面

## 3、启动项目

1. 进入 serve 目录，执行下面的代码启动数据库和服务器

```
npm run serve
```

2. 进入 web 目录，打开 list.html 文件