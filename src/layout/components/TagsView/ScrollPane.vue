<template>
  <div class="scroll-container">
    <scroll-x>
      <slot/>
    </scroll-x>
  </div>
</template>

<script lang="ts">
import ScrollX from "./ScrollX.vue";
export default {
  name: 'ScrollPane',
  components: {
    ScrollX
  },
  setup() {
    return {

    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.scroll-container {
  width: 100%;
  height: 48px;
  line-height: 48px;
  overflow: hidden;
  padding: 0;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  background: white;

  ::v-deep .c-scrollbar-wrap-all {
    overflow-y: hidden;
    .c-scrollbar-bar{
      bottom: 17px
    }
  }
}
</style>
