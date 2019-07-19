import LogIn from 'src/models/login'
import { app } from 'src/boot/feathers'
import { createMutations } from 'src/utils/mapper'

export default {
  namespaced: true,
  state () {
    return new LogIn()
  },
  mutations: createMutations(LogIn),
  actions: {
    initialize () {
      console.log('login/initialize')
    },
    async login ({ state }) {
      await app.login.create(state)
    }
  }
}
