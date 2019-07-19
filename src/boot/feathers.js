// import something here
import feathers from '@feathersjs/feathers'

class Service {
  feathers = feathers()
  get login () {
    return this.feathers.service('/api/login')
  }
  get signup () {
    return this.feathers.service('/api/signup')
  }
}

const app = new Service()

// "async" is optional
export default async ({ Vue }) => {
  Vue.prototype.$app = app
}

export { app }
