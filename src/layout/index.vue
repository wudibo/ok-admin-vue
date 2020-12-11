<template>
  <a-layout id="admin-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined/>
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="admin-header">
        <Navbar></Navbar>
      </a-layout-header>
      <a-layout-content
          class="layout-content"
          :style="{  }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script type='text/ecmascript-6'>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import Navbar from "./components/Navbar.vue";

import {onMounted, ref, provide} from 'vue'

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Navbar,
  },
  setup() {
    let collapsed = ref(false);
    let selectedKeys = ref(['1']);
    provide('collapsed', collapsed);
    return {
      collapsed,
      selectedKeys
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/variable';

#admin-layout {
  background:red;
  position: relative;
  height: 100%;
  width: 100%;
  .admin-header{
    padding: 0;
    height: 112px;
    line-height: normal;
    background: @white-color;
  }
  .layout-content{
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
