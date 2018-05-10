/**
 * @ 路由跳转
 * @author shan-er
 */
import {
    createApp
} from './index.js';
// 这里的 context 是服务端渲染模板时传入的
export default context => {
    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前，
    // 就已经准备就绪。
    return new Promise((resolve, reject) => {
        const {
            app,
            router
        } = createApp();

        router.push(context.url);

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({
                    code: 404
                });
            }

            resolve(app);
        }, reject);
    })
}