import Vue from 'vue'

export function createMutations (Model) {
  const keys = Object.keys(new Model())
  const mutations = keys.reduce((mutations, key) => {
    mutations[key] = function (state, value) {
      Vue.set(state, key, value)
    }
    return mutations
  }, {})
  return mutations
}

export const mapState = function (module, properties) {
  var props = {}
  if (Array.isArray(properties)) {
    properties.forEach(property => {
      props[property] = {
        get () {
          return this.$store.state[module][property]
        },
        set (value) {
          this.$store.commit(`${module}/${property}`, value)
        }
      }
    })
  } else {
    Object.keys(properties).forEach(key => {
      var property = properties[key]
      props[key] = {
        get () { return this.$store.state[module][property] },
        set (value) { this.$store.commit(`${module}/${property}`, value) }
      }
    })
  }
  return props
}

export const mapGetterss = function (module, properties) {
  var props = {}
  if (Array.isArray(properties)) {
    properties.forEach(property => {
      props[property] = {
        get () {
          return this.$store.getters[`${module}/${property}`]
        },
        set (value) {
          this.$store.commit(`${module}/${property}`, value)
        }
      }
    })
  } else {
    Object.keys(properties).forEach(key => {
      var property = properties[key]
      props[key] = {
        get () { return this.$store.getters[`${module}/${property}`] },
        set (value) { this.$store.commit(`${module}/${property}`, value) }
      }
    })
  }
  return props
}
