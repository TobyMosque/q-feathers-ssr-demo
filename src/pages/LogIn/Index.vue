<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="full-width relative-position q-ma-md icon-wrapper">
        <q-avatar class="absolute-center icon-size" text-color="white" color="primary" icon="security" />
      </div>
      <q-input class="col col-12" v-model="username" :label="$t('auth.username')"></q-input>
      <q-input class="col col-12" type="password" v-model="password" :label="$t('auth.password')"></q-input>
      <div class="col col-4">
        <q-btn class="full-width" color="primary" :label="$t('login.signup')" to="/auth/signup"></q-btn>
      </div>
      <div class="col col-8">
        <q-btn class="full-width" color="positive" :label="$t('login.login')" @click="login"></q-btn>
      </div>
    </div>
  </div>
</template>

<script src="./Index.vue.js"></script>
