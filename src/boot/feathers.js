// import something here
import feathers from '@feathersjs/feathers'
const app = feathers()

// "async" is optional
export default async ({ Vue }) => {
  Vue.prototype.$app = app
}

export { app }
