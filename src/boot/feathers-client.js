// import something here
import { app } from './feathers'
import { service } from './axios'
import rest from '@feathersjs/rest-client'

const restClient = rest()
app.feathers.configure(restClient.axios(service.axios))

// "async" is optional
export default async (context) => { }
