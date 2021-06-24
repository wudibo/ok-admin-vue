<template>
  <n-layout style="height: 100vh; top: 0; bottom: 0" has-sider>
    <!--  侧边栏   -->
    <lay-sidebar></lay-sidebar>

    <n-layout style="height: 100%">
      <!--  头部   -->
      <n-layout-header
        position="absolute"
        style="height: 64px"
        :native-scrollbar="false"
        bordered
      >
        <lay-header></lay-header>
      </n-layout-header>

      <!-- tab栏 -->
      <n-layout-content
        position="absolute"
        style="height: 48px; top: 64px; left: 0; right: 0"
      >
        <lay-tab></lay-tab>
      </n-layout-content>

      <!--   主内容区   -->
      <n-layout-content
        position="absolute"
        style="top: 112px; bottom: 0"
        :native-scrollbar="false"
      >
        <router-view v-slot="{ Component }">
          <transform v-if="layConfig.refresh">
            <keep-alive>
              <component :is="Component" v-if="$route.meta.keepAlive" />
            </keep-alive>
            <component :is="Component" v-if="!$route.meta.keepAlive" />
          </transform>
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref } from "vue";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from "naive-ui";
import LayHeader from "./LayHeader/index.vue";
import LaySidebar from "./LaySidebar/index.vue";
import LayTab from "./LayTab/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    LayTab,
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
      collapsed: false,
      refresh: true
    });
    provide("layConfig", layConfig);
    return {
      layConfig
    };
  }
});
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  font-size: 24px;
}
</style>
