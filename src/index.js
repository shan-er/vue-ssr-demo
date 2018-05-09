/**
 * @ 入口文件
 * @author shan-er
 */
import Vue from 'vue';
import index from './app.vue';
import router from './routes.js';
import Http from './common/http';
require('./assets/scss/common.scss');
window.Http = Http;

new Vue({
	router,
	el: '#app',
	render: h => h(index)
});