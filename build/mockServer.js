const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const Mock = require('mockjs');
const mockData = require('../src/common/mockData');

const server = app.listen(3000, function () {
    console.log('server listening on port 3000')
});

app.post('/*', function(req, res, next) {
    let m = mockData[req.url];
    if (m) {
        let query = req.body;

        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        });

        typeof m === 'function' ? res.end(JSON.stringify(m(query))) : res.end(JSON.stringify(Mock.mock(m)));
    } else {
        next();
    }
});

process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2');
});


