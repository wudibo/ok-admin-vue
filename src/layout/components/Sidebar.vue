<template>
  <a-layout-sider v-model:collapsed="collapsed"
                  :width="siderWidth"
                  :trigger="null"
                  collapsible>
    <div class="logo"/>
    <a-menu
        theme="dark"
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <pie-chart-outlined/>
        <span>nav 1</span>
      </a-menu-item>

      <a-sub-menu key="sub2">
        <template #title>
          <span><mail-outlined/><span>User</span></span>
        </template>
        <a-menu-item key="sub2-1">Tom</a-menu-item>
        <a-menu-item key="sub2-2">Bill</a-menu-item>
        <a-menu-item key="sub2-3">Alex</a-menu-item>
      </a-sub-menu>

      <a-menu-item key="3">
        <desktop-outlined/>
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>

  </a-layout-sider>
</template>

<script type='text/ecmascript-6'>
import {onMounted, inject, ref} from 'vue'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
  },
  props: {
    siderWidth: {
      type: Number,
      default: 256
    }
  },
  setup() {
    let selectedKeys = ref(['1']),
        openKeys = ref(['sub1']),
        preOpenKeys = ref(['sub1']);
    return {
      openKeys,
      preOpenKeys,
      selectedKeys,
      collapsed: inject('collapsed')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/variable";

.sidebar {
  display: flex;
  width: 265px;
  background: red;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
