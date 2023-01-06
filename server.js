const jsonServer = require('json-server');
const server = jsonServer.create();
const router = json.router('db.json')
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8081

server.use(middleware);
server.use(router);
server.listen(port);