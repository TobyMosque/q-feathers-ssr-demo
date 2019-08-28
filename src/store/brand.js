import { factory } from '@toby.mosque/utils'
import Brand from 'src/models/brand'
const { store } = factory

export default store({
  options: {
    model: Brand
  },
  actions: {
    toggleMode ({ commit, state }) {
      commit('dark', !state.dark)
    }
  }
})
