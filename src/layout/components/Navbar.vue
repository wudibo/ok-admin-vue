<template>
  <div class="navbar">
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
</template>

<script type='text/ecmascript-6'>

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
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
</style>
