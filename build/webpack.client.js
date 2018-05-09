/**
 * webpack 配置
 * @author shan-er
 */
const merge = require('webpack-merge');
const config = require('./webpack.base');
var webpack = require('webpack');
var path = require('path');
const url = require('url');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

var devConfig = merge(config, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
        // 以便可以在之后正确注入异步 chunk。
        // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ]

});
module.exports = devConfig;