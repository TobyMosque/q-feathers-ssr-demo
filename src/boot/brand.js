import { QInput } from 'quasar'
import { factory } from '@toby.mosque/utils'
const { component } = factory

const factories = {}
factories.base = {
  render ({ self, options }) {
    options.props.dark = self.$store.state.brand.dark
  }
}

factories.field = {
  render ({ self, options }) {
    options.props.outlined = self.$store.state.brand.outlined
  }
}

const group = {}
group.field = { 'q-input': QInput }

// "async" is optional
export default async ({ Vue }) => {
  for (let key in group.field) {
    let base = group.field[key]
    let branded = component({
      name: base.options.name,
      component: base,
      factories: [ factories.base, factories.field ]
    })
    Vue.component(key, branded)
  }
}
