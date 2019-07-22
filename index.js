const server = require('./server');
const config = require('./server/config');

server.create(config);

server.start();