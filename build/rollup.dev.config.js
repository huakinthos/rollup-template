const path = require('path')
const serve = require('rollup-plugin-serve')
const baseConf = require('./rollup.base')

const resolveFile = filePath => path.resolve(__dirname, '..', filePath)
const componentName = process.env.COMPONENT_NAME
const port = process.env.PORT || 10001
const componentType = process.env.COMPONENT_TYPE || 'js'

module.exports = {
  input: resolveFile(`src/index.ts`),
  output: [
    {
      file: resolveFile('dist/bundle.umd.js'),
      format: 'umd',
      name: 'Bundle',
      sourcemap: true,
    }
  ],
  plugins: [
    ...baseConf.plugins,
    serve({
      port,
      open: true,
      contentBase: [resolveFile('public'), resolveFile('dist')],
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: 'localhost',
    })
  ]
}