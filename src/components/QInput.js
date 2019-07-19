import TransparentFactory from './TransparentFactory'
import { QInput } from 'quasar'

const component = TransparentFactory({
  name: 'QInput',
  component: QInput,
  render ({ self, options }) {
    options.props.outlined = self.$store.state.app.outlined
    options.props.dark = self.$store.state.app.dark
  }
})
export default component
