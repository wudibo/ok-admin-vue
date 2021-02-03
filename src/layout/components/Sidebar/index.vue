<template>
  <!--  box-shadow: 2px 0 6px rgba(0,21,41,.35);-->
  <a-layout-sider v-model:collapsed="collapsed"
                  class="sidebar"
                  :theme="theme"
                  :class="theme"
                  :width="width"
                  :trigger="null"
                  collapsible>
    <div class="sidebar-content" :style="{width: collapsed ? '' : width+'px'}">
      <div class="layout-sider-logo"><img src="@/assets/logo.png" alt="logo"/></div>
      <a-menu
          mode="inline"
          :theme="theme"
          v-model:openKeys="openKeys"
          @select="(res) => SET_SELECTEDKEYS(res.keyPath)"
          :selectedKeys="selectedKeys">
        <sidebar-item v-for="route in asyncRoutes"
                      :key="route.path"
                      :item="route"
                      :base-path="route.path"></sidebar-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
import {computed, inject, ref, Ref, watchEffect} from 'vue'
import {useRoute, RouteLocationNormalizedLoaded} from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import {asyncRoutes} from '@/router/index.ts'
import {mapMutations, useStore} from "vuex";

const headerOpenKeys = ($route: RouteLocationNormalizedLoaded) => {
  return $route.matched.map(item => {
    return item.path
  });
}

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  props: {
    width: {
      type: Number,
      default: 256
    }
  },
  methods: {
    ...mapMutations('admin', [
      'SET_SELECTEDKEYS',
    ]),
  },
  setup() {
    const $route = useRoute(),
        $store = useStore(),
        theme = ref('dark'), //主题色 (dark, light)
        collapsed = inject('collapsed') as Ref<boolean>,
        openKeys = ref(['']);
    $store.commit('admin/SET_SELECTEDKEYS', [$route.path]);
    const selectedKeys = computed(() => {
      return $store.getters['admin/selectedKeysGetter'];
    });
    watchEffect(() => {
      openKeys.value = collapsed.value ? [''] : headerOpenKeys($route);
    });
    return {
      theme,
      openKeys,
      collapsed,
      selectedKeys,
      asyncRoutes
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: relative;
  z-index: 99;
  height: 100%;
  overflow-x: hidden;
  user-select: none;

  ::v-deep {
    .ant-layout-sider-children {
      width: calc(100% + 17px);
      padding-right: 17px;
      overflow-x: hidden;
      box-sizing: content-box;
    }

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
