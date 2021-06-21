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
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import {NSwitch} from 'naive-ui'

export default defineComponent({
  name: "LayHeader",
  components: {
    NSwitch
  },
  setup(props, superContext) {
    const layConfig: any = inject('layConfig');
    return {
      layConfig
    }
  }
})
</script>

<style lang="scss" scoped>
.lay-header{
  display: flex;
}
.padding-xs{
  padding: 0 10px;
}
</style>
