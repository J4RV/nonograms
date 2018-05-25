'use strict'

const rewrite = require('koa-rewrite')
const bodyParser = require('koa-bodyparser')

module.exports = {
  port: 3000,
  content: ['./public', './node_modules'],

  open: {path: '/app'},

  add: (app, middleware, options) => {
    app.use(bodyParser({
      extendTypes: {
        // shim in XML as text; don't need real parsing - https://github.com/koajs/bodyparser/issues/45
        text: ['application/xml']
      },
      enableTypes: ['text', 'json', 'form']
    }))

    // Rewrite all app/* urls to index.html (replaces history fallback)
    app.use(rewrite(/^\/app/, '/index.html'))

    middleware.webpack()
    middleware.content()
  }
}
