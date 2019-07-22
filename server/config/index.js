const _ = require('lodash');
const env = process.env.NODE_ENV || 'local';
const envConfig = require('./local');

let currentEnv = { env: env };

module.exports = _.merge(currentEnv, envConfig);
