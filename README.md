##vue+webpack+router项目构建

### 启动项目准备：
1. 在启动之前，需要安装相关依赖包，如果之前有相关包没有安装的话，可以直接输入以下命令
	`npm i` 或 `npm install`
2. 启动之前，需要先打包第三方文件库，即生成dll文件夹。
	`npm run dll`

### 启动
1. 启动命令：
	`npm run dev`
2. 访问以下链接：
	[http://localhost:8080/release/index.html](http://localhost:8080/release/index.html)

### 打包
	`npm run build`



## 分支ssr-base
不带请求的demo

前端渲染：`npm run dev`
服务器端渲染：
   `npm run build:client`
   `npm run build:server`
   `npm run server`
   
## 分支ssr-ajax
带ajax请求的demo

前端渲染：`npm run dev`
服务器端渲染：
   `npm run build:client`
   `npm run build:server`
   `npm run server`
