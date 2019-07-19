// import something here
import { app } from './feathers'
import { instance } from './axios'
import rest from '@feathersjs/rest-client'

const restClient = rest()
app.feathers.configure(restClient.axios(instance))

// "async" is optional
export default async (context) => { }
