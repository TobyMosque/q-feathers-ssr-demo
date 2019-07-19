// import something here
import dotenv from 'dotenv'
import file from '../../server.env'

console.log(file)
const env = dotenv.config({ path: '../../server.env' })
console.log(env)

// "async" is optional
export default async (context) => {
  console.log(context)
}
