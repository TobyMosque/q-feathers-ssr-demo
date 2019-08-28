import { store } from '@toby.mosque/utils'
import Brand from 'src/models/brand'
const { mapState } = store

const keys = Object.keys(new Brand())
export default {
  name: 'ToggleModeComponent',
  computed: {
    ...mapState('brand', keys)
  }
}
