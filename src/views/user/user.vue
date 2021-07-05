<template>
  <div class="foo">{{ foo }}</div>
  <div>{{ bar }}</div>
  <div @click="headerKeep">切换</div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'user',
  setup() {
    const foo = ref('user');
    const bar = ref('bar');
    const headerKeep = () => {
      foo.value = 'dsafasd' + Math.random() * 100;
    };
    return {
      foo,
      bar,
      headerKeep
    };
  }
});
</script>
<style lang="scss" scoped></style>
