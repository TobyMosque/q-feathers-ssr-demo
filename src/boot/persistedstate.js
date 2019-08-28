import { Cookies } from 'quasar'
import createPersistedState from 'vuex-persistedstate'

export default function ({ store, ssrContext }) {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  createPersistedState({
    paths: ['auth'],
    filter ({ type }) {
      return type.startsWith('auth')
    },
    storage: {
      getItem (key) {
        return JSON.stringify(cookies.get(key))
      },
      setItem (key, value) {
        cookies.set(key, value)
      },
      removeItem (key) {
        cookies.remove(key)
      }
    }
  })(store)

  if (!ssrContext) {
    createPersistedState({
      paths: ['brand']
    })(store)
  }

  console.log(store.state.auth.token)
}
