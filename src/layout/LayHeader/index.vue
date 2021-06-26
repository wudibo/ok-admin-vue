<template>
  <div class="lay-header">
    <n-grid x-gap="12" :cols="2">
      <!-- left -->
      <n-gi class="header-padding-xs header-left">
        <div class="header-padding-xs">
          <n-switch v-model:value="layConfig.collapsed" />
          collapsed
        </div>
        <div class="header-padding-xs">
          <n-switch v-model:value="layConfig.sidebarInverted" />
          inverted
        </div>
        <div class="header-refresh">
          <n-icon @click="handleRefresh" class="re-icon" size="20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                fill="currentColor"
              ></path>
            </svg>
          </n-icon>
        </div>
        <n-breadcrumb>
          <n-breadcrumb-item>首页</n-breadcrumb-item>
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item>主控台</n-breadcrumb-item>
        </n-breadcrumb>
      </n-gi>
      <!-- right -->
      <n-gi class="header-padding-xs header-right">
        <div class="green">2</div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import http from "../../utils/http";
import { throttle } from "../../utils/tools";
import type { Ref } from "vue";
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
    NBreadcrumbItem
  },
  setup(props, superContext) {
    const layConfig: any = inject("layConfig");
    return {
      layConfig,
      handleRefresh: throttle(() => {
        layConfig.refresh = false;
        setTimeout(() => {
          layConfig.refresh = true;
        });
      })
    };
  }
});
</script>

<style lang="scss" scoped>
.lay-header {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-padding-xs {
  padding: 0 10px;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header-refresh {
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  .re-icon {
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #36ad6a;
    }
  }
}
</style>
