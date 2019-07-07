<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="full-width relative-position q-ma-md" style="height: 256px">
        <q-avatar flat class="absolute-center" size="256px" font-size="196px" text-color="white" color="primary" icon="assignment_ind" />
      </div>
      <q-input class="col col-12" v-model="name" label="Name"></q-input>
      <q-input class="col col-12" v-model="username" label="User Name"></q-input>
      <q-input class="col col-12" type="password" v-model="password" label="Password"></q-input>
      <q-input class="col col-12" type="password" v-model="confirm" label="Confirm Password"></q-input>
      <div class="col col-4">
        <q-btn class="full-width" color="primary" label="Return" to="/auth/login"></q-btn>
      </div>
      <div class="col col-8">
        <q-btn class="full-width" color="positive" label="Register" @click="signup"></q-btn>
      </div>
    </div>
  </div>
</template>

<script src="./Index.vue.js"></script>
