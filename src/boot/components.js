// import something here
import ToggleMode from 'src/components/ToggleMode'
import QInput from 'src/components/QInput'

// "async" is optional
export default async ({ Vue }) => {
  Vue.component('toggle-mode', ToggleMode)
  Vue.component('q-input', QInput)
}
