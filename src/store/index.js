import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import brand from './brand'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      brand
    },
    strict: process.env.DEV
  })

  return Store
}
