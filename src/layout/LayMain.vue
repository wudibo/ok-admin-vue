<template>
  <div class="foo"> {{ foo }}</div>
  <div> {{ bar }}</div>
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
