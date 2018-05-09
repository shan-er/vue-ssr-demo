/**
 * @file http 拦截器
 * @author shan-er
 */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
//拦截器
Vue.http.interceptors.push((request, next) => {
	next((res) => {
		// 对接口的统一处理

		return res;
	})
});


export default {
	post(url, params) {
		let _params = params || {};
		return Vue.http.post(url, _params);
	},
	get(url, params) {
		let _params = params || {};
		return Vue.http.get(url, _params);
	}
}