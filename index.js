//ES Module 模块引入方式
//CommonJS 模块引入方式
//CMD
//AMD

//webpack  模块打包工具

// ES 模块引入方式
import Header from './header' 
import Sidebar from './sidebar.js'
import avatar from './img.png'
import './index.css'
var img = new Image()

img.src = avatar
img.classList.add('avatar')

// //commonJS 模块引入方式
// let Header = require('./header')
// let Sidebar = require('./sidebar')
var root = document.getElementById('root')
root.append(img)
new Header()
new Sidebar()