<template>
  <div id="q-app" :class="{ 'dark': dark, 'light': !dark }">
    <router-view />
  </div>
</template>

<script>
import { store } from '@toby.mosque/utils'
import Brand from 'src/models/brand'
const { mapState } = store

const keys = Object.keys(new Brand())
export default {
  name: 'AuthLayout',
  mounted () {
    console.log(this.$q.cookies)
  },
  computed: {
    ...mapState('brand', keys)
  }
}
</script>

<style>
</style>
