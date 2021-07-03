<template>
  <div class="lay-header">
    <n-grid x-gap="2" cols="2">
      <!-- left -->
      <n-gi class="xs-hidden">
        <div class="header-left">
          <n-icon class="lay-hover" size="20">
            <menu-fold-outlined
              v-show="!layConfig.collapsed"
              @click="layConfig.collapsed = true"
            />
            <menu-unfold-outlined
              v-show="layConfig.collapsed"
              @click="layConfig.collapsed = false"
            />
          </n-icon>
          <div class="header-refresh">
            <n-icon @click="handleRefresh" class="lay-hover" size="20">
              <refresh-filled />
            </n-icon>
          </div>
          <n-breadcrumb>
            <n-breadcrumb-item v-for="item in matcheds" :key="item">{{
              item
            }}</n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </n-gi>

      <!-- right -->
      <n-gi suffix>
        <div class="header-right">
          <div class="flex-center padding-right-10">
            <n-dropdown
              trigger="hover"
              @select="handleSelect"
              :options="optionsISO"
            >
              <n-icon class="lay-hover" size="20">
                <planet-outline />
              </n-icon>
            </n-dropdown>
          </div>
          <lay-setting></lay-setting>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '../../icon/antd-icon';
import { RefreshFilled } from '../../icon/material-icon';
import { throttle } from '../../utils/tools';
import LaySetting from '@/layout/LaySetting/index.vue';
import { PlanetOutline } from '@vicons/ionicons5';
import { defineComponent, h, inject, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import {
  NGi,
  NGrid,
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NDropdown,
} from 'naive-ui';
export default defineComponent({
  name: 'LayHeader',
  components: {
    NGi,
    NGrid,
    NIcon,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    LaySetting,
    RefreshFilled,
    PlanetOutline,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup(props, superContext) {
    const layConfig: any = inject('layConfig'),
      route = useRoute();
    let matcheds = ref([] as Array<string>);

    watchEffect(() => {
      // 面包屑
      matcheds.value = [];
      const matched = route.matched;
      for (let i = 0; i < matched.length; i++) {
        matcheds.value.push(matched[i].meta.title as string);
      }
    });

    return {
      matcheds,
      layConfig,
      optionsISO: [
        {
          label: '简体中文',
          key: 'zh',
        },
        {
          label: 'English',
          key: 'en',
        },
      ],
      handleSelect: (val: any) => {
        console.log(val);
      },
      handleRefresh: throttle(() => {
        layConfig.refresh = true;
        setTimeout(() => {
          layConfig.refresh = false;
        }, 10);
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/variables';
.padding-right-10 {
  padding-right: 10px;
}
.padding-left-10 {
  padding-left: 10px;
}
.lay-header {
  height: 100%;
  display: flex;
  align-items: center;
}
.flex-center{
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
}
.header-hover:hover {
  color: $primary;
}
</style>
