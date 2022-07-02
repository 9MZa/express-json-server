const jsonServer = require('json-server');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const express = require('express')

var server = express();

server.use('/api', jsonServer.router('db.json'));


server.use(middlewares);
server.use(router);

server.listen(port);