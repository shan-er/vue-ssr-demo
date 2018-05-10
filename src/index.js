/**
 * @ 路由跳转
 * @author shan-er
 */

import Vue from 'vue';
import App from './app.vue';
import router from './routes.js';

export function createApp () {
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { router, app };
}
