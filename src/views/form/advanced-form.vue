<template>
  <div class="page">
    表单
  </div>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref} from 'vue'

export default {
  setup() {
    let collapsed = ref(false);

    return {
      siderWidth: 256,
      collapsed
    }
  }
}
</script>

<style lang="less" scoped>

</style>
