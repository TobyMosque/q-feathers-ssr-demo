import SignUp from 'src/models/signup'
import Module from 'src/store/signup'
import { mapState } from 'src/utils/mapper'
import { mapActions } from 'vuex'

const moduleName = 'signup'
const keys = Object.keys(new SignUp())
export default {
  name: 'SignUpIndex',
  preFetch ({ store }) {
    store.registerModule(moduleName, Module)
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
    ...mapActions(moduleName, [ 'signup' ])
  }
}
