
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bao-sdk.cjs.production.min.js')
} else {
  module.exports = require('./bao-sdk.cjs.development.js')
}
