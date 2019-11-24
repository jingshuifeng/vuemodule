/*
 * @Author: your name
 * @Date: 2019-11-24 00:55:35
 * @LastEditTime: 2019-11-24 13:10:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings 
 * @FilePath: \vuemodule\src\index.js
 */
//这是工程的入口文件
import Vue  from "vue";
import App from './app.vue';

import './asset/styles/test.css'
import './asset/image/1.jpg'
import './asset/styles/test-stylus.styl'

const root =document.createElement('div')
document.body.appendChild(root)
//mount就是讲我们的App挂在到root这样一个根节点中去
new Vue({
    render:(h)=>h(App)
}).$mount(root)