<template>
  <div class="scroll-container">
    <c-scrollbar width="100%"
                 :hBarStyle="{'background-color': 'rgba(0,0,0,.05)'}"
                 height="65px"
                 trigger="hover">
      <slot/>
    </c-scrollbar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScrollPane',
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
