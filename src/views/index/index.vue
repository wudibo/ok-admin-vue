<template>
  <div class="page">
    <div class="flex">首页</div>
  </div>
</template>

<script type='text/ecmascript-6'>
import {ref} from 'vue'

export default {
  setup() {
    const collapsed = ref(false);

    return {
      collapsed
    }
  }
}
</script>

<style lang="less" scoped>
  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
