/**
 * @ 路由跳转
 * @author shan-er
 */
import Vue from 'vue';
import {
  createApp
} from './index.js';

const {
  app,
  router
} = createApp();

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount('#app');
});
