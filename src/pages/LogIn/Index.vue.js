import { factory } from '@toby.mosque/utils'
import { app } from 'src/boot/feathers'
import { mapActions } from 'vuex'
const { store, page } = factory

const options = {
  model: class LogIn {
    username = ''
    password = ''
  }
}

const storeModule = store({
  options,
  actions: {
    initialize () {
      console.log('login/initialize')
    },
    async login ({ state, rootState, commit }) {
      commit('auth/token', await app.login.create(state), { root: true })
    }
  }
})

const moduleName = 'login'
export default page({
  options,
  storeModule,
  moduleName,
  name: 'LogInIndex',
  methods: {
    ...mapActions(moduleName, [ 'login' ])
  }
})
