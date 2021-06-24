<template>
  <div class="lay-tab">
    <div class="tab-item">
      <n-button :bordered="false">首页</n-button>
    </div>
    <div class="tab-item">
      <n-button :bordered="false">user</n-button>
    </div>
    <div class="tab-item">
      <n-button :bordered="false">ok-admin-vue</n-button>
    </div>
    <div v-for="item in 20" :key="item" class="tab-item">
      <n-button :bordered="false">ok-admin-vue</n-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

export default defineComponent({
  name: "LayTab",
  inheritAttrs: false,
  components: {
    NButton
  },
  setup() {
    return {
      current: 1
    };
  }
});
</script>
<style lang="scss" scoped>
.lay-tab {
  height: 100%; /*48px*/
  padding: 0 10px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  background-color: #f5f7f9;
}
.tab-item {
  margin: 0 5px;
  background-color: #fff;
}
</style>
