// import something here
import { app } from './feathers'
import { instance } from './axios'
import rest from '@feathersjs/rest-client'

const restClient = rest()

// "async" is optional
export default async (context) => {
  app.configure(restClient.axios(instance))
}
