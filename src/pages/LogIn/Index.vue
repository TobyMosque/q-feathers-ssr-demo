<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="full-width relative-position q-ma-md" style="height: 256px">
        <q-avatar class="absolute-center" size="256px" font-size="196px" text-color="white" color="primary" icon="security" />
      </div>
      <q-input class="col col-12" v-model="username" label="User Name"></q-input>
      <q-input class="col col-12" type="password" v-model="password" label="Password"></q-input>
      <div class="col col-4">
        <q-btn class="full-width" color="primary" label="Sign Up" to="/auth/signup"></q-btn>
      </div>
      <div class="col col-8">
        <q-btn class="full-width" color="positive" label="Log In" @click="login"></q-btn>
      </div>
    </div>
  </div>
</template>

<script src="./Index.vue.js"></script>
