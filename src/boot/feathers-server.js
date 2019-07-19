// import something here
import { app } from './feathers'
import services from 'src/services'

services(app.feathers)

// "async" is optional
export default async (context) => { }
