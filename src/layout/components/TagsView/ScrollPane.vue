<template>
  <div class="scroll-container">
    <c-scrollbar v-if="isPC" width="100%"
                 :hBarStyle="{'background-color': 'rgba(0,0,0,.05)'}"
                 height="48px"
                 trigger="hover">
      <slot/>
    </c-scrollbar>
    <div v-else style="overflow-x: auto">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {isPCFun} from '@/utils/index.ts';
export default {
  name: 'ScrollPane',
  setup() {
    const isPC = isPCFun();
    return {
      isPC: isPC
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

.scroll-container {
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding: 0;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  background: @content-bg;

  ::v-deep .c-scrollbar-wrap-all {
    overflow: hidden;
  }
}
</style>
