<template>
  <div class="page">首页</div>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref} from 'vue'

export default {
  setup(props) {
    let collapsed = ref(false);

    return {
      collapsed
    }
  }
}
</script>

<style lang="less" scoped>

</style>
