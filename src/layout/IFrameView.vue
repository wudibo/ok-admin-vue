<template>
  <div class="iframe">
    <iframe :src="src" class="iframe-view" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IFrameView",
  props: {
    src: {
      type: String,
      default: "https://gitee.com/zhizous"
    }
  }
});
</script>
<style lang="scss">
.iframe,
.iframe-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.iframe-view {
  width: 100%;
  height: 100%;
}
</style>
