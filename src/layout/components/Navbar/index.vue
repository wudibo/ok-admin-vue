<template>
  <div class="navbar">
    <div class="trigger">
      <menu-unfold-outlined
          v-if="collapsed"
          @click="() => (collapsed = !collapsed)"/>
      <menu-fold-outlined v-else @click="() => (collapsed = !collapsed)"/>
    </div>
    <div class="outlined">
      <reload-outlined/>
    </div>

    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item href="">
        首页
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        Application
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">

import {
  ReloadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue';
import {inject} from 'vue'

export default {
  components: {
    ReloadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    return {
      collapsed: inject('collapsed'),
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/variable';

.navbar {
  background: @white-color;
  padding: 0 24px;
  height: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .trigger,.outlined {
    padding-right: 20px;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: @main-color;
    }
  }
  .outlined{
    font-size: 16px;
  }

  .breadcrumb {
    margin-right: 20px;
  }

}
</style>
