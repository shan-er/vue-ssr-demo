/**
 * webpack 配置
 * @author shan-er
 */
const merge = require('webpack-merge');
const config = require('./webpack.base');
var webpack = require('webpack');
var path = require('path');
const url = require('url');

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

var devConfig = merge(config, {
    entry: './src/entry-server.js',
    // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    target: 'node', //指明构建出的代码是要运行在node环境里
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2' //指明输出的代码要是commonjs规范
    },
    externals: [
        (function() {
            var IGNORES = [
                'electron'
            ];
            return function(context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ],
    plugins: [
        new VueSSRServerPlugin()
    ]
});
module.exports = devConfig;