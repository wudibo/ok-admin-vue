<template>
  <div class="lay-header">
    <div class="padding-xs">
      <n-switch v-model:value="layConfig.collapsed"/>
      collapsed
    </div>
    <div class="padding-xs">
      <n-switch v-model:value="layConfig.sidebarInverted"/>
      inverted
    </div>
    <div class="padding-xs">
      <button @click="handleRequest">点击请求</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import {NSwitch} from 'naive-ui'
import http from "../../utils/http";

export default defineComponent({
  name: "LayHeader",
  components: {
    NSwitch
  },
  setup(props, superContext) {
    const layConfig: any = inject('layConfig');
    return {
      layConfig,
      handleRequest: () => {
        http.get('/user/person').then(res => {
          console.log(res)
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.lay-header {
  display: flex;
}

.padding-xs {
  padding: 0 10px;
}
</style>
