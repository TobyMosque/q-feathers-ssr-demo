import LogIn from 'src/models/login'
import Module from 'src/store/login'
import { mapState } from 'src/utils/mapper'
import { mapActions } from 'vuex'

const moduleName = 'login'
const keys = Object.keys(new LogIn())

export default {
  name: 'LogInIndex',
  preFetch ({ store }) {
    store.registerModule(moduleName, Module)
    console.log('JWT_SECRET: ', process.env.JWT_SECRET)
    return store.dispatch(`${moduleName}/initialize`)
  },
  mounted () {
    this.$store.registerModule(moduleName, Module, { preserveState: true })
  },
  destroyed () {
    this.$store.unregisterModule(moduleName)
  },
  computed: {
    ...mapState(moduleName, keys)
  },
  methods: {
    ...mapActions(moduleName, [ 'login' ])
  }
}
