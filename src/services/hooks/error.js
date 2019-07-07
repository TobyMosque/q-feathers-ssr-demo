const { GeneralError } = require('@feathersjs/errors')

module.exports = {
  async error (context) {
    if (context.error) {
      const error = context.error
      if (!error.code) {
        const newError = new GeneralError('server error')
        context.error = newError
        return context
      }
      if (error.code === 404 || process.env.PROD) {
        error.stack = null
      }
      console.log(context.error.code)
      return context
    }
  }
}
