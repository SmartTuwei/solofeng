// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import i18n from './i18n'
import VueLazyload from 'vue-lazyload' // 引入这个懒加载插件
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import {
  Tabs,
  Alert,
  Icon,
  Row,
  Col,
  TabPane,
  Tooltip
} from 'element-ui'

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Alert)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tooltip)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/tip.png',
  loading: '../static/img/tip.png',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
// FastClick.attach(document.body)
Vue.prototype.getRem = (pwidth, prem) => {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pwidth * prem + 'px'
}

router.afterEach((to, from, next) => {
  setTimeout(() => {
    var _hmt = _hmt || [];
    (function () {
      // 每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?f7e19535769d84504ac11dcbeb5de27e'
      hm.id = 'baidu_tj'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
