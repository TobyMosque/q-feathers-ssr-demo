import { factory } from '@toby.mosque/utils'
import Auth from 'src/models/Auth'
const { store } = factory

export default store({
  options: {
    model: Auth
  }
})
