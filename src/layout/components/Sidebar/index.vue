<template>
  <!--  box-shadow: 2px 0 6px rgba(0,21,41,.35);-->
  <a-layout-sider v-model:collapsed="collapsed"
                  class="sidebar"
                  :theme="theme"
                  :class="theme"
                  :width="sideWidth"
                  :trigger="null"
                  collapsible>
    <div class="layout-sider-logo"><img src="@/assets/logo.png" alt="logo"/></div>
    <a-menu
        mode="inline"
        :theme="theme"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys">
      <sidebar-item v-for="route in asyncRoutes"
                   :key="route.path"
                   :item="route"
                   :base-path="route.path"></sidebar-item>
    </a-menu>
    <div style="color: white">{{routeData}}</div>
  </a-layout-sider>
</template>

<script lang="ts">
import {inject, ref, Ref} from 'vue'
import SidebarItem from "./SidebarItem.vue";
import {asyncRoutes} from '@/router/index.ts'
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router";

const headerOpenKeys = ($route: RouteLocationNormalizedLoaded) => {
  const paths = $route.matched.map(item => {
    return item.path
  });
  return paths;
}

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  watch: {
    $route(){
      const self = this as any;
      self.selectedKeys = [self.$route.path];
      self.openKeys = headerOpenKeys(self.$route);
    },
  },
  setup() {
    const $route = useRoute(),
        theme = ref('dark'), //主题色 (dark, light)
        openKeys = ref(headerOpenKeys($route)),
        selectedKeys = ref([$route.path]),
        isPC = inject('isPC') as Ref<boolean>;
    return {
      isPC,
      theme,
      selectedKeys,
      openKeys,
      asyncRoutes,
      sideWidth: isPC.value ? 256 : 160,
      collapsed: inject('collapsed')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

.sidebar {
  position: relative;
  z-index: 99;

  ::v-deep {
    &.ant-layout-sider-dark {
      box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    }

    &.ant-layout-sider-light {
      box-shadow: 2px 0 8px 0 rgba(240, 240, 240, .1);
    }

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border-color: transparent;
    }
  }

  .layout-sider-logo {
    box-sizing: border-box;
    height: 64px;
    padding: 16px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid transparent;

    img {
      height: 100%;
    }
  }

  &.dark {
    .layout-sider-logo {
      border-bottom: 1px solid #000000;
    }
  }

  &.light {
    .layout-sider-logo {
      border-bottom: 1px solid #f8f8f9;
    }
  }


}


</style>
