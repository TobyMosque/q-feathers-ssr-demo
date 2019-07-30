import axios from 'axios'
import { Loading, Notify } from 'quasar'

class RestService {
  count = 0
  axios = void 0
  token = void 0
  constructor () {
    let self = this
    this.axios = axios.create()
    this.axios.interceptors.request.use(function (config) {
      if (self.token) {
        config.headers.authorization = `bearer ${self.token}`
      }
      self.showLoad()
      return config
    }, function (error) {
      self.hideLoad('Danger, Will Robinson! Danger!')
      return Promise.reject(error)
    })
    this.axios.interceptors.response.use(function (response) {
      self.hideLoad()
      return response
    }, function (error) {
      self.hideLoad('Danger, Will Robinson! Danger!')
      return Promise.reject(error)
    })
  }
  setToken (token) {
    this.token = token
  }
  showLoad () {
    if (this.count++ === 0) {
      Loading.show()
    }
  }
  hideLoad (message) {
    if (--this.count === 0) {
      Loading.hide()
    }
    if (message) {
      Notify.create({ message, color: 'negative' })
    }
  }
}

const service = new RestService()
export default async ({ Vue, store, router }) => {
  service.setToken(store.state.app.token)
  Vue.prototype.$axios = service.axios
}

export { service }
