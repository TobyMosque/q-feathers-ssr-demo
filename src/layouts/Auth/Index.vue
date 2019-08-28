<template>
  <q-layout view="lHh Lpr lFf" class="bg-main">
    <q-page-container>
      <q-page class="row">
        <div class="col flex flex-center">
          <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
        </div>
        <div class="col col-auto shadow-up-2 auth-container bg-content q-pa-sm">
          <router-view />
        </div>
      </q-page>
      <toggle-mode></toggle-mode>
    </q-page-container>
  </q-layout>
</template>

<script src="./Index.vue.js"></script>
<style lang="styl" src="./Index.vue.styl"></style>
