import LogIn from 'src/models/login'
import { createMutations } from 'src/utils/mapper'

export default {
  namespaced: true,
  state () {
    return new LogIn()
  },
  mutations: createMutations(LogIn),
  actions: {
    initialize () { },
    login (...args) {
      console.log('login', args)
    }
  }
}
