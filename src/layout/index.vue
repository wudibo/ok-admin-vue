<template>
  <a-layout id="admin-layout">
    <sidebar></sidebar>

    <a-layout>
      <a-layout-header class="admin-header">
        <Navbar></Navbar>
        <TagsView></TagsView>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref, provide} from 'vue'
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar/index.vue';
import TagsView from './components/TagsView/index.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    TagsView,
  },
  setup() {
    let collapsed = ref(false);
    provide('collapsed', collapsed);

    return {
      collapsed
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
  user-select: none;

  .admin-header {
    padding: 0;
    height: 112px;
    line-height: normal;
    background: @white-color;
  }

  .layout-content {
    margin: 0;
    background: @content-bg;
    height: 100%
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>