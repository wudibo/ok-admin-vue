<template>
  <div class="scroll-container">
    <c-scrollbar width="100%"
                 trigger="hover"
                 :hBarStyle="{'background-color': 'rgba(0,0,0,.05)'}"
                 height="100%">
      <slot/>
    </c-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'ScrollPane',
  setup(props) {
    return {}
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
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  background: @content-bg;
}
</style>
