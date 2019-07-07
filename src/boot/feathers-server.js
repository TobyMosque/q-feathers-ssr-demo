// import something here
import { app } from './feathers'
import services from 'src/services'

// "async" is optional
export default async (context) => {
  services(app)
}
