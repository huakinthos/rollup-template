const devConf = require('./build/rollup.dev.config')
const prodConf = require('./build/rollup.prod.config')

module.exports = process.env.NODE_ENV === 'production' ? prodConf : devConf
