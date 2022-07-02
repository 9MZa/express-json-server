var express = require('express');
var jsonServer = require('json-server');
var server = express();

server.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})

server.use('/api', jsonServer.defaults(), jsonServer.router('db.json'));

server.listen(3000);