<template>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn fab :icon="dark ? 'brightness_3' : 'brightness_5'" color="accent" @click="dark = !dark" />
  </q-page-sticky>
</template>

<script src="./Index.vue.js"></script>
