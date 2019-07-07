/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * All content of this folder will be copied as is to the output folder. So only import:
 *  1. node_modules (and yarn/npm install dependencies -- NOT to devDependecies though)
 *  2. create files in this folder and import only those with the relative path
 *
 * Note: This file is used for both PRODUCTION & DEVELOPMENT.
 * Note: Changes to this file (but not any file it imports!) are picked up by the
 * development server, but such updates are costly since the dev-server needs a reboot.
 */
const express = require('@toby.mosque/feathersjs-express')
const feathers = require('@feathersjs/feathers')
const swagger = require('feathers-swagger')
const path = require('path')
const services = require('../src/services')

module.exports.extendApp = function ({ app }) {
  express(feathers(), app)
  app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .configure(express.rest())
    .configure(swagger({
      docsPath: '/docs',
      uiIndex: path.join(__dirname, 'docs.html'),
      specs: {
        info: {
          title: 'A test',
          description: 'A description',
          version: '1.0.0'
        }
      }
    }))
  services(app)
  app.use(express.errorHandler())
}
