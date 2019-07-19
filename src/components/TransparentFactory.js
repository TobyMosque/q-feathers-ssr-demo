export default function ({ name, component, render, setup }) {
  const props = component.options.props
  const computed = {}
  if (props.value) {
    computed.__value = {
      get () { return this.value },
      set (value) { return this.$emit('input', value) }
    }
  }
  const methods = Object.keys(component.options.methods).reduce((methods, key) => {
    methods[key] = function (...args) {
      let root = this.$refs.root
      root[key].invoke(root, args)
    }
    return methods
  }, {})

  let options = {
    name: name,
    props: props,
    methods: methods,
    computed: computed,
    render (h) {
      let self = this
      let key = this.$vnode.key
      let options = {
        key: key,
        ref: 'root',
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs
      }
      if (props.value) {
        let { values, ...props } = this.$props
        let { input, ...listeners } = this.$listeners
        props.value = self.__value
        listeners.input = function (value) {
          self.__value = value
        }
        options.props = props
        options.on = listeners
      } else {
        options.props = this.$props
        options.on = this.$listeners
      }
      if (render) {
        render({ h, self, options })
      }
      return h(component, options)
    }
  }
  if (setup) {
    setup({ options })
  }
  return options
}
