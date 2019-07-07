import SignUp from 'src/models/signup'
import { app } from '../boot/feathers'
import { createMutations } from 'src/utils/mapper'
console.log(app)
export default {
  namespaced: true,
  state () {
    return new SignUp()
  },
  mutations: createMutations(SignUp),
  actions: {
    initialize () { },
    async signup ({ state }) {
      try {
        let response = await app.service('/api/signup').create(state)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
