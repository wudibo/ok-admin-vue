<template>
  <n-layout style="height: 100vh; top: 0; bottom: 0" has-sider>
    <!--  侧边栏   -->
    <lay-sidebar></lay-sidebar>

    <n-layout style="height: 100%">
      <!--  头部   -->
      <n-layout-header
        position="absolute"
        style="height: 64px; overflow: hidden"
        :native-scrollbar="false"
        :inverted="layConfig.headerInverted"
        bordered
      >
        <lay-header></lay-header>
      </n-layout-header>

      <!-- tab栏 -->
      <n-layout-content
        position="absolute"
        style="height: 48px; top: 64px; left: 0; right: 0"
      >
        <lay-tag></lay-tag>
      </n-layout-content>

      <!--   主内容区   -->
      <n-layout-content
        position="absolute"
        style="top: 112px; bottom: 0; background: #f0f2f5"
        :native-scrollbar="false"
      >
        <lay-main></lay-main>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref } from 'vue';
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui';
import LayHeader from './LayHeader/index.vue';
import LaySidebar from './LaySidebar/index.vue';
import LayTag from './LayTag/index.vue';
import LayMain from './LayMain/index.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    LayMain,
    LayTag,
    LaySidebar,
    LayHeader,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider
  }, //
  setup(props, superContext) {
    const routerShow = ref(false);
    const layConfig = reactive({
      sidebarInverted: true,
      headerInverted: false,
      collapsed: false,
      refresh: false
    });
    provide('layConfig', layConfig);
    return {
      routerShow,
      layConfig
    };
  }
});
</script>

<style lang="scss">
@import './styles/layout.scss';
</style>
