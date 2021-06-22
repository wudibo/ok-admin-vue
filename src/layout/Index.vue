<template>
  <n-layout style="height: 100vh;top: 0; bottom: 0;" has-sider>

    <!--  侧边栏   -->
    <lay-sidebar></lay-sidebar>

    <n-layout style="height: 100%;">
      <!--  头部   -->
      <n-layout-header position="absolute"
                       style="height: 64px; padding: 24px;"
                       :native-scrollbar="false"
                       bordered>
        <lay-header></lay-header>
      </n-layout-header>

      <!--   主内容区   -->
      <n-layout-content position="absolute"
                        style="top: 64px; bottom: 0;"
                        :native-scrollbar="false"
                        content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import {defineComponent, provide, reactive} from 'vue'
import {NLayout, NLayoutHeader, NLayoutContent, NLayoutSider} from 'naive-ui'
import LayHeader from "./LayHeader/Index.vue";
import LaySidebar from "./LaySidebar/Index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    LaySidebar,
    LayHeader,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider
  },
  setup(props, superContext) {
    const layConfig = reactive({
      sidebarInverted: false,
      collapsed: false
    });
    provide('layConfig', layConfig);
  }
})

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  font-size: 24px;
}
</style>
