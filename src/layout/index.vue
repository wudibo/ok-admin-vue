<template>
  <a-layout id="admin-layout">
    <sidebar :width="width"></sidebar>
    <a-layout :style="{width: collapsed ? '': 'calc(100% - ' + width + 'px)'}">
      <a-layout-header class="admin-header">
        <Navbar></Navbar>
        <TagsView></TagsView>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <div v-for="(item,index) in routerList" :key="index">{{ item }}</div>
        <div v-for="(item,index) in selectedKeys" :key="index">{{ item }}</div>
        <router-view v-if="layoutRouterAlive"/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import {ref, provide, nextTick,} from 'vue'
import {mapGetters, mapMutations} from "vuex";
import Navbar from './components/Navbar/index.vue';
import Sidebar from './components/Sidebar/index.vue';
import TagsView from './components/TagsView/index.vue';
import {isPCFun} from '@/utils/index.ts';

const ispc = isPCFun();
export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    TagsView,
  },
  computed: {
    ...mapGetters('admin', {
      routerList: 'routesGetter',
      selectedKeys: 'selectedKeysGetter'
    })
  },
  methods: {
    ...mapMutations('admin', [
      'SET_ROUTES'
    ])
  },
  setup() {
    const isPC = ref(ispc),
        collapsed = ref(!ispc),
        layoutRouterAlive = ref(true);
    provide('isPC', isPC);
    provide('collapsed', collapsed);
    provide('layoutReload', function () {
      layoutRouterAlive.value = false;
      nextTick(function () {
        layoutRouterAlive.value = true;
      })
    });

    return {
      isPC,
      width: ispc ? 256 : 200,
      collapsed,
      layoutRouterAlive
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/variable';

#admin-layout {
  position: relative;
  height: 100%;
  width: 100%;

  .admin-header {
    padding: 0;
    height: 112px;
    line-height: normal;
    background: @white-color;
    user-select: none;
  }

  .layout-content {
    margin: 0;
    background: @content-bg;
    height: 100%;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
