import SignUp from 'src/models/signup'
import { app } from 'src/boot/feathers'
import { createMutations } from 'src/utils/mapper'

export default {
  namespaced: true,
  state () {
    return new SignUp()
  },
  mutations: createMutations(SignUp),
  actions: {
    initialize () { },
    async signup ({ state }) {
      await app.signup.create(state)
    }
  }
}
