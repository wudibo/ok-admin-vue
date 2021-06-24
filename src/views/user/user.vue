<template>
  <div class="foo">{{ foo }}</div>
  <div>{{ bar }}</div>
  <div @click="headerKeep">切换</div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const foo = ref("user");
const bar = ref("bar");
const headerKeep = () => {
  foo.value = "dsafasd" + Math.random() * 100;
};
</script>
<style lang="scss" scoped>
.foo {
}
</style>
