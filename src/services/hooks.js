const { GeneralError } = require('@feathersjs/errors')

module.exports = {
  error: {
    async all (context) {
      if (context.error) {
        const error = context.error
        console.log(error)
        if (!error.code) {
          const newError = new GeneralError('server error')
          context.error = newError
          return context
        }
        if (error.code === 404 || process.env.PROD) {
          error.stack = null
        }
        return context
      }
    }
  }
}
