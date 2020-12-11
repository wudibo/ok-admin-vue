<template>
  <div class="navbar">
    <div class="outlined">
      <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"/>
      <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>

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
    <div class="nav">
      <a-button class="nav-item">
        首页
      </a-button>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import {onMounted, ref, inject} from 'vue'

export default {
  components: {
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
@import '../../assets/css/variable';

.navbar {
  background: @white-color;

  .outlined {
    padding: 0 24px;
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .trigger {
      font-size: 18px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @main-color;
      }
    }

    .breadcrumb {
      margin-left: 20px;
    }
  }

  .nav {
    padding: 0 24px;
    height: 48px;
    line-height: 48px;
    background: @content-bg;
    box-shadow: 0 1px 4px rgba(255, 255, 255, .08);

    .nav-item {
      border-color: transparent;

      &:hover {
        color: @main-color;
        border-color: @main-color;
      }
    }
  }

}
</style>
