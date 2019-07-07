<template>
  <div id="q-app" :class="{ 'dark': dark, 'light': !dark }">
    <router-view />
  </div>
</template>

<script>
import App from 'src/models/app'
import { mapState } from 'src/utils/mapper'

const keys = Object.keys(new App())
export default {
  name: 'AuthLayout',
  computed: {
    ...mapState('app', keys)
  }
}
</script>

<style>
</style>
