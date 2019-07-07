import App from 'src/models/app'
import { createMutations } from 'src/utils/mapper'

let module = {
  namespaced: true,
  state () {
    return new App()
  },
  mutations: createMutations(App),
  actions: {
    toggleMode ({ commit, state }) {
      commit('dark', !state.dark)
    }
  }
}
export default module
