const crypto = require('crypto')
const util = require('util')
const jwt = require('jsonwebtoken')

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
  verifyJwt
}
