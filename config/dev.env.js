var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URL: '"http://tdv-25.dev"',
    API_CLIENT_ID: '"2"',
    API_CLIENT_SECRET: '"BmstZJ3SUspixo6GtdJNmkXyfD6Edr6AobRwOAT6"'
})