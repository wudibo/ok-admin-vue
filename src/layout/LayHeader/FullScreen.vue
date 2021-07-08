<template>
  <n-icon class="lay-hover" @click="handleScreen" size="20">
    <contract-outline v-show="isFullScreen" />
    <expand-outline v-show="!isFullScreen" />
  </n-icon>
</template>
<script lang="ts">
import { ref } from 'vue';
import { NIcon } from 'naive-ui';
import { ExpandOutline, ContractOutline } from '@vicons/ionicons5';
export default {
  name: 'FullScreen',
  components: { NIcon, ExpandOutline, ContractOutline },
  setup() {
    const isFullScreen = ref(false);
    return {
      isFullScreen,
      handleScreen() {
        let el: any = '';
        let objFullScreen: any = '';
        if (!isFullScreen.value) {
          el = document.documentElement;
          objFullScreen =
            el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullScreen;
        } else {
          el = document;
          objFullScreen =
            el.cancelFullScreen ||
            el.webkitCancelFullScreen ||
            el.mozCancelFullScreen ||
            el.exitFullScreen;
        }
        if (objFullScreen) {
          isFullScreen.value = !isFullScreen.value;
          objFullScreen.call(el);
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped></style>
