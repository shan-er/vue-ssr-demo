/**
 * @store
 * @author shan-er
 */
const Vue = require('vue')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const {
    createBundleRenderer
} = require('vue-server-renderer')
const bundle = require('./release/vue-ssr-server-bundle.json')
const clientManifest = require('./release/vue-ssr-client-manifest.json')
const server = express()

const renderer = createBundleRenderer(bundle, {
    template: fs.readFileSync('./index.template.html', 'utf-8'),
    clientManifest
})

const Mock = require('mockjs');
const mockData = require('./src/common/mockData');

// 静态文件
server.use(express.static(path.join(__dirname, '/release'), {
    maxAge: 2592000 * 1000
}));

// api
server.post("/common/**", (req, res, next) => {
    let m = mockData[req.url];
    let obj = {};
    if (m) {
        let query = req.body;

        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        });

        typeof m === 'function' ? res.end(JSON.stringify(m(query))) : res.end(JSON.stringify(Mock.mock(m)));
    } 

    res.json(res.body);
})

// 服务端渲染
server.get('*', (req, res) => {
    const context = {
        url: req.originalUrl
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            res.end(html)
        }
    })
})

server.listen(8082)