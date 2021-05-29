<template>
  <div class="foo"> {{ foo }}</div>
  <div> {{ bar }}</div>
  <v-btn flat>
    Normal
  </v-btn>

  <v-btn
      flat
      color="secondary"
  >
    Secondary
  </v-btn>

  <v-btn
      flat
      color="error"
  >
    Error
  </v-btn>

  <v-btn
      flat
      disabled
  >
    Disabled
  </v-btn>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const foo = ref('hello world');
const bar = ref('bar');

</script>
<style lang="scss" scoped>
.foo {

}
</style>
