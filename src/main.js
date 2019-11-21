import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Index from './Index.vue';
import router from './router/router';
import store from './store/store';

Vue.use(ElementUI);
Vue.config.productionTip = false;

const requireComponent = require.context(
  // 组件目录相对路径
  './components',
  // 是否查询子目录
  false,
  // 匹配基础组件名称的正则表达式，大写字母开头
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
  .replace(/^\.\//, '')  //去掉路径前的./
  .replace(/\.\w+$/, '')  //去掉后缀名
  .split('-')
  .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
  .join();
  // console.log(componentName);
  // 注册进全局组件
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
});

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app');