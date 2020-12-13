<template>
  <div class="page">
    表单
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue'
import {asyncRoutes} from '@/router/index.ts'

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
