import axios from 'axios'

const instance = axios.create()

export default async ({ Vue }) => {
  Vue.prototype.$axios = instance
}

export { instance }
