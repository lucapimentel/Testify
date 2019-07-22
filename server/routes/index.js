const route = require('./apis');

function init(server) {
    server.use('/api', route);
}

module.exports = {
    init: init
};