<template>
  <div class="navbar">
    <menu-unfold-outlined
        class="trigger"
        v-if="collapsed"
        @click="() => (collapsed = !collapsed)"/>
    <menu-fold-outlined class="trigger" title="展开/收起" v-else @click="() => (collapsed = !collapsed)"/>

    <reload-outlined @click="headerReload" class="outlined" title="刷新"/>

    <breadcrumb></breadcrumb>

  </div>
</template>

<script lang="ts">

import {
  ReloadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue';
import {inject} from 'vue'
import Breadcrumb from "@/layout/components/Navbar/Breadcrumb.vue";

export default {
  name: "Navbar",
  components: {
    Breadcrumb,
    ReloadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    return {
      headerReload: inject('layoutReload'),
      collapsed: inject('collapsed'),
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/variable';

.navbar {
  background: @white-color;
  height: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .trigger, .outlined {
    padding: 0 10px;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: @main-color;
    }
  }

  .outlined {
    font-size: 14px;
  }

  .breadcrumb {
    padding: 0 10px;
  }

}
</style>
