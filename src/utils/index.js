const uid = require('quasar').uid
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
module.exports = {
  comb,
  sleep
}
