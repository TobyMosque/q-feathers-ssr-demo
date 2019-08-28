<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="full-width relative-position q-ma-md icon-wrapper">
        <q-avatar flat class="absolute-center icon-size" text-color="white" color="primary" icon="assignment_ind" />
      </div>
      <q-input class="col col-12" v-model="name" :label="$t('signup.name')"></q-input>
      <q-input class="col col-12" v-model="username" :label="$t('auth.username')"></q-input>
      <q-input class="col col-12" type="password" v-model="password" :label="$t('auth.password')"></q-input>
      <q-input class="col col-12" type="password" v-model="confirm" :label="$t('signup.confirm')"></q-input>
      <div class="col col-4">
        <q-btn class="full-width" color="primary" :label="$t('app.return')" to="/auth/login"></q-btn>
      </div>
      <div class="col col-8">
        <q-btn class="full-width" color="positive" :label="$t('signup.register')" @click="signup"></q-btn>
      </div>
    </div>
  </div>
</template>

<script src="./Index.vue.js"></script>
