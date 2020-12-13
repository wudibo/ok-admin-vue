<template>
  <a-layout-sider v-model:collapsed="collapsed"
                  :width="sideWidth"
                  :trigger="null"
                  collapsible>
    <div class="logo"><img src="/@/assets/logo.png" alt="logo"/></div>
    <a-menu
        theme="dark"
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys">
      <SidebarItem v-for="route in asyncRoutes"
                   :key="route.path"
                   :item="route"
                   :base-path="route.path"></SidebarItem>
    </a-menu>
  </a-layout-sider>
</template>

<script type='text/ecmascript-6'>
import {onMounted, inject, ref} from 'vue'
import SidebarItem from "./SidebarItem.vue";
import {asyncRoutes} from '/@/router/index.js'

export default {
  components: {
    SidebarItem,
  },
  setup() {
    let isPC = inject('isPC'),
        selectedKeys = ref([]),
        openKeys = ref([]);
    return {
      isPC,
      sideWidth: isPC.value ? 256 : 160,
      openKeys,
      selectedKeys,
      asyncRoutes,
      collapsed: inject('collapsed')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

.sidebar {
  display: flex;
  width: 265px;
  background: red;
}

.logo {
  box-sizing: border-box;
  height: 64px;
  padding: 16px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
}
</style>
