<template>
  <div class="lay-header">
    <n-grid x-gap="24" :cols="2">
      <!-- left -->
      <n-gi class="header-left">
        <n-icon style="cursor: pointer" size="20">
          <menu-fold-outlined
            v-show="!layConfig.collapsed"
            @click="layConfig.collapsed = true"
          />
          <menu-unfold-outlined
            v-show="layConfig.collapsed"
            @click="layConfig.collapsed = false"
          />
        </n-icon>
        <!-- <div>
          <n-switch v-model:value="layConfig.sidebarInverted" />
          inverted
        </div> -->
        <div class="header-refresh">
          <n-icon @click="handleRefresh" class="re-icon" size="18">
            <refresh-filled />
          </n-icon>
        </div>
        <n-breadcrumb>
          <n-breadcrumb-item>首页</n-breadcrumb-item>
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item>主控台</n-breadcrumb-item>
        </n-breadcrumb>
      </n-gi>
      <!-- right -->
      <n-gi class="header-right">
        <lay-setting></lay-setting>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "../../icon/antd-icon";
import { RefreshFilled } from "../../icon/material-icon";
import { throttle } from "../../utils/tools";
import LaySetting from "@/layout/LaySetting/index.vue";
import { defineComponent, inject } from "vue";
import {
  NSwitch,
  NGrid,
  NGi,
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon
} from "naive-ui";
export default defineComponent({
  name: "LayHeader",
  components: {
    NGi,
    NIcon,
    NGrid,
    NSwitch,
    NBreadcrumb,
    NBreadcrumbItem,
    LaySetting,
    RefreshFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup(props, superContext) {
    const layConfig: any = inject("layConfig");
    return {
      layConfig,
      handleRefresh: throttle(() => {
        layConfig.refresh = true;
        setTimeout(() => {
          layConfig.refresh = false;
        }, 10);
      })
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.lay-header {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-left {
  display: flex;
  padding: 0 24px;
  align-items: center;
}
.header-right {
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: flex-end;
}
.header-refresh {
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  .re-icon {
    cursor: pointer;
    /* transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1); */
    &:hover {
      color: $primary;
    }
  }
}
.header-hover:hover{
  color: $primary;
}
</style>
