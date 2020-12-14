<template>
  <div class="page">
    <div class="cont">
    </div>
  </div>
</template>

<script lang="ts">
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
.cont {
  background: #13c2c2;
  width: 100px;
  height: 100px
}

.flex {
  display: flex;
}
</style>
