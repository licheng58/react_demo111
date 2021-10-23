1-创建react项目   create-react-app XXX   创建时候遇到wecpack版本问题  需要在根目录新建文件  .env  并且 SKIP_PREFLIGHT_CHECK=true  然后重启项目即可

2-src/index.js 是项目出口文件  
import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import 'antd-mobile/dist/antd-mobile.css'
import './asserts/fonts/iconfont.css'
import './index.scss'
reactDom.render(<App></App>, document.getElementById('root'))
。。。。。。

3-安装路由  yarn add react-router-dom
  App.js配置路由
  import {
  BrowserRouter as Router,--BrowserRouter 是基于HTML5 history API (pushState, replaceState, popstate)事件

  HashRouter as Router, --HashRouter是基于window.location.hash

  Switch,
  Route,
  Link

  NavLink -- <NavLink>是一种特殊的Link组件，匹配路径时，渲染的a标签带有active。
} from "react-router-dom";


4-安装 ant  yarn add antd-mobile@next

5-在react脚手架中已经有了sass的配置，因此只需要安装sass的依赖包，就可以直接使用sass了
  yarn add node-sass -D
  安装node-sass失败的问题
  -yarn add node-sass -D --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  - 把index.css改成index.scss  即可

  6-module.scss使用  直接创建 XXX.module.scss  文件引入 import styles from './...'  :global{}包裹子元素
