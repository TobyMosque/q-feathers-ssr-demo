import axios from 'axios'
import { Loading, Notify } from 'quasar'

const instance = axios.create()

export default async ({ Vue, router }) => {
  let count = 0
  let showLoad = () => {
    if (count++ === 0) {
      Loading.show()
    }
  }

  let hideLoad = (message) => {
    if (--count === 0) {
      Loading.hide()
    }
    if (message) {
      Notify.create({ message, color: 'negative' })
    }
  }

  instance.interceptors.request.use(function (config) {
    showLoad()
    return config
  }, function (error) {
    hideLoad('Danger, Will Robinson! Danger!')
    return Promise.reject(error)
  })

  instance.interceptors.response.use(function (response) {
    hideLoad()
    return response
  }, function (error) {
    hideLoad('Danger, Will Robinson! Danger!')
    return Promise.reject(error)
  })

  Vue.prototype.$axios = instance
}

export { instance }
