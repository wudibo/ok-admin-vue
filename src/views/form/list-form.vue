<template>
  <div class="page">
    表单列表
  </div>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref} from 'vue'
import {asyncRoutes} from '/@/router/index.js'

export default {
  setup() {
    return {
      asyncRoutes
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/variable";

.page {
  padding: 20px;
}
</style>
