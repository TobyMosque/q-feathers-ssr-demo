import axios from 'axios'
import { i18n } from './i18n'
import { Loading, Notify } from 'quasar'

class RestService {
  count = 0
  axios = void 0
  store = void 0
  constructor () {
    let self = this
    this.axios = axios.create()
    this.axios.interceptors.request.use(function (config) {
      let token = self.store.state.auth.token
      if (token) {
        config.headers.authorization = `bearer ${token}`
      }
      self.showLoad()
      return config
    }, function (error) {
      self.hideLoad(i18n.$t('app.error'))
      return Promise.reject(error)
    })
    this.axios.interceptors.response.use(function (response) {
      self.hideLoad()
      return response
    }, function (error) {
      self.hideLoad(i18n.$t('app.error'))
      return Promise.reject(error)
    })
  }
  configure (store) {
    this.store = store
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
  service.configure({ store })
  Vue.prototype.$axios = service.axios
}

export { service }
