const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = require('./routes');

let app = express();

create = function (config) {
    let routes = require('./routes');
    app.set('env', config.env);
    app.set('port', config.port);
    app.set('hostname', config.hostname);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));


    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(passport.initialize());

    routes.init(app);

};

start = function () {

    let hostname = app.get('hostname');
    let port = app.get('port');

    app.listen(port, function () {
        console.log("Server running on: " + port);
    });
};

module.exports = {
    create: create,
    start: start
}