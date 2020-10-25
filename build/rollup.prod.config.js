const path = require('path')
const filesize = require('rollup-plugin-filesize')
const { terser } = require('rollup-plugin-terser')
const baseConf = require('./rollup.base')
const { name, version, author } = require('../package.json')

const componentName = process.env.COMPONENT_NAME
const componentType = process.env.COMPONENT_TYPE || 'js'

const banner = `${'/*!\n* '}${name}.js v${version}\n`
  + ` * (c) 2018-${new Date().getFullYear()} ${author}\n`
  + ' * Released under the MIT License.\n'
  + ' */'

module.exports = [
  {
    input: path.resolve(__dirname, `../src`),
    output: [
      {
        file: path.resolve(
          __dirname,
          `../src/dist/bunch.min.js`
        ),
        format: 'umd',
        name,
        banner,
        sourcemap: false,
      }
    ],
    plugins: [...baseConf.plugins, terser(), filesize()]
  },
  // {
  //   input: path.resolve(__dirname, `../src/${componentName}/src/index.${componentType}`),
  //   output: {
  //     file: path.resolve(
  //       __dirname,
  //       `../src/${componentName}/dist/${componentName}.min.esm.js`
  //     ),
  //     format: 'esm',
  //     banner,
  //   },
  //   plugins: [...baseConf.plugins, terser(), filesize()],
  // },
  // {
  //   input: path.resolve(__dirname, `../src/${componentName}/src/index.${componentType}`),
  //   output: [
  //     {
  //       file: path.resolve(
  //         __dirname,
  //         `../src/${componentName}/dist/${componentName}.js`
  //       ),
  //       format: 'umd',
  //       name,
  //       banner,
  //       sourcemap: true,
  //     }
  //   ],
  //   plugins: [...baseConf.plugins],
  // }
]