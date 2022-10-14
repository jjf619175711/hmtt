import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 目标1：有2处在检查我的代码
// webpack开发服务器（在下面的终端中）+ eslint插件，在保存时，检查代码荣国在写代码过程中用插件解决了问题,webpack就不会报错
// vscode+eslint插件+工作区根目录下.eslinrc.js，在保存时，检查代码

// 如果不好使 排查问题
// 1.ESLint插件右下角设置中 - 扩展设置
// 2打开配套的md笔记，大纲左边的最下面，有一些常见的错误
