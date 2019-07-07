import App from 'src/models/app'
import { mapState } from 'src/utils/mapper'

const keys = Object.keys(new App())
export default {
  name: 'ToggleModeComponent',
  computed: {
    ...mapState('app', keys)
  }
}
