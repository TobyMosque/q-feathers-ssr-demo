import { factory } from '@toby.mosque/utils'
import { app } from 'src/boot/feathers'
import { mapActions } from 'vuex'
const { store, page } = factory

const options = {
  model: class SignUp {
    username = ''
    password = ''
    confirm = ''
    name = ''
  }
}

const storeModule = store({
  options,
  actions: {
    initialize () {
      console.log('signup/initialize')
    },
    async signup ({ state }) {
      await app.signup.create(state)
    }
  }
})

const moduleName = 'signup'
export default page({
  options,
  storeModule,
  moduleName,
  name: 'SignUpIndex',
  methods: {
    ...mapActions(moduleName, [ 'signup' ])
  }
})
