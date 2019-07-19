const uid = require('quasar').uid
const crypto = require('crypto')
const util = require('util')
const jwt = require('jsonwebtoken')

const comb = function (date) {
  if (!date) {
    date = new Date()
  }
  let uuid = uid()
  let comb = ('00000000000' + date.getTime().toString(16)).substr(-12)
  comb = comb.slice(0, 8) + '-' + comb.slice(8, 12)
  return uuid.replace(uuid.slice(0, 13), comb)
}

const sleep = function (delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}

const randomBytes = util.promisify(crypto.randomBytes)
const scrypt = util.promisify(crypto.scrypt)
const signJwt = util.promisify((payload, callback) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS512',
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_ISSUER
  }, callback)
})
const verifyJwt = util.promisify((token, callback) => {
  return jwt.verify(token, process.env.JWT_SECRET, {
    algorithm: 'HS512',
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_ISSUER
  }, callback)
})

module.exports = {
  randomBytes,
  scrypt,
  signJwt,
  verifyJwt,
  comb,
  sleep
}
