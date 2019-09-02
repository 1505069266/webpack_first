# webpack打包
```
先在目录下
npm init 初始化
然后在下载webpack的模块
npm i webpack --save
npm i webpack -cli --save-dev
npm i
如何打包一个index.js文件
npx webpack index.js
然后生成一个dist目录,将里面的main.js引入到项目中即可
```
 * webpack不能全局安装(webpack-cli也是一样)
 ```
 卸载webpack
 npm uninstall webpack webpack-cli -g
 ```
 * 在项目中安装webpack
 ```
 npm install webpack webpack-cli -D(或者--save-dev两者等价)
 ```
 * 在当前目录中使用webpack  (npx指令)
 # webpack不全局安装的好处:不同的项目webpack的版本不同,这样防止项目不能运行
 ```
 npx webpack -v
 ```
 * 如何下载指定版本的webpack(后缀加上@版本号)
 ```
 npm install webpack@4.16.5 webpack-cli -D
 ```
 ## webpack的配置文件相关(文件名必须是webpack.config.js:如果是自定义的文件名需要运行的话:npx webpack --config 文件名)
 * 找不到配置是因为webpack团队默认给你配置了
 * 如何自己配置配置文件
 ```
 生成一个webpack.config.js文件(配置看目录的文件)
 然后运行npx webpack 会自动运行这个文件
 ```
 * 然后运行npx webpack会自动去查找webpack.config.js中的代码:如果有问题的话,需要删除node-modules目录 重新npm i下载一下模块
 ### webpack.config.js文件
 * entry 入口文件
 * output 出口文件
 * mode 打包文件的格式
 ```
 一行的话
 mode: 'production'
 不被压缩
 mode: 'development'
 ```
 ### package.json文件
 * scripts :执行前面的就是执行后面的语句  执行的语句是先执行当前目录的,不是全局的
 ### 如何打包图片等等
 * 在webpack.config.js中写一个module
 * 引入loader来打包图片:file-loader  url-loader
 * loader是重点,比如vue-loader  file-loader
 ```
 loader 是用来打包对应后缀的文件,具体可以参开webpack官网
 ```
 ### 如何打包css
 * 使用style-loader和css-loader
 * 打包scss使用sass-loader和node-sass
 * 自动添加浏览器前缀css,比如webkit等等 使用postcss-loader和autoprefixe r
 ### 在sass中引入其他的sass
 * 在css-loader中配置
 ```
 {
     loader: 'css-loader',
     options: {
         importLoaders:2
     }
 }
 ```
 ### 模块化css
 ```
 {
     loader: 'css-loader',
     options: {
         importLoaders:2
     },
     //css只在当前页面有用
     modules: true
 }
 页面是导入
 import style from './index'
 addClass(style.avatar)
 ```
 ### 使用plugins让打包更便捷
 * 自动生成html文件
 ```
 npm install --save-dev html-webpack-plugin
 //html-webpack-pligin 会在打包结束后,自动生成一个html文件,并把打包生成的js自动引入到这个html文件中
 但是html中没有内容,如何自动生成内容
 配置一个模板
 plugins: [new Html({
     //把index.html作为webpack的html模板
        template:'./index.html'
    })],
 ```
 * 每次打包的时候先删除这个文件,然后在重新生成一个文件
 * 使用clean-webpack-plugin
 ```
 导入plugin到webpack.config.js
 const clean = require('clean-webpack-plugin')

 ```
 * entry与output的基础配置
 ```
 生成多个js在webpack.config.js
 配置cdn
 ```
# 如果执行之后报错,如何知道是源文件的哪里报错(使用sourceMap)
 * sourceMap它是一个映射关系,他知道dist目录下main.js文件的错对应是源文件的哪里
 * sourceMap设置之后打包速度之后会变慢,打包目录下会生成一个map文件
 * inline-source-map不会生成map文件,生成在main.js文件中
 * cheap-inline-source-map精确到行不到列
 * cheap-module-inline-source-map将module中显示
 * 开发推荐使用cheap-module-eval-source-map:显示信息比较全,速度较快
 * production推荐使用cheap-module-source-map:显示信息全,快
## 修改代码自动打包
 * package.json中的scripts:
 ```
 "watch":"webpack --watch"(监听)
 "start": "webpack-dev-server"(启动一个http服务)
 "server":"node server.js"()
 ```
# babel使用
 * 先下载相关包
 ```
 npm install --save-dev babel-loader @babel/core
 ```
 * 在webpack.config.js中rule
 ```
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
 ```
 * 下载一些包
 ```
 npm install @babel/preset-env --save-dev
 ```
 * 配置presets
 ```
  "presets": ["@babel/preset-env"]
 ```