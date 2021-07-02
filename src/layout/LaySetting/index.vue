<template>
  <n-icon class="setting-btn lay-hover" @click="show = true" size="16">
    <ellipsis-vertical />
  </n-icon>
  <n-drawer v-model:show="show" :width="300">
    <n-drawer-content title="">
      <div>
        <n-divider>主题风格设置</n-divider>

        <!-- 左边栏主题 -->
        <n-grid class="thenme-box sidebar-thenme" x-gap="12" :cols="3">
          <!-- 左边栏暗色主题 -->
          <n-gi class="thenme">
            <div
              @click="layConfig.sidebarInverted = true"
              class="thenme-checkbox pointer"
            >
              <img :src="navThemeDark" alt="navThemeDark" />
            </div>
            <div v-show="layConfig.sidebarInverted" class="checked">
              <n-icon color="#18a058" size="10">
                <Ellipse />
              </n-icon>
            </div>
          </n-gi>
          <!-- 左边栏亮色主题 -->
          <n-gi class="thenme">
            <div
              @click="layConfig.sidebarInverted = false"
              class="thenme-checkbox pointer"
            >
              <img :src="navThemeLight" alt="navThemeLight" />
            </div>
            <div v-show="!layConfig.sidebarInverted" class="checked">
              <n-icon color="#18a058" size="10">
                <Ellipse />
              </n-icon>
            </div>
          </n-gi>
        </n-grid>

        <!-- 头部主题 -->
        <n-grid class="thenme-box header-thenme" x-gap="12" :cols="3">
          <!-- 左边栏亮色主题 -->
          <n-gi class="thenme">
            <div
              @click="layConfig.headerInverted = false"
              class="thenme-checkbox pointer"
            >
              <img :src="navThemeDark" alt="navThemeDark" />
            </div>
            <div v-show="!layConfig.headerInverted" class="checked">
              <n-icon color="#18a058" size="10">
                <Ellipse />
              </n-icon>
            </div>
          </n-gi>

          <!-- 左边栏暗色主题 -->
          <n-gi class="thenme">
            <div
              @click="layConfig.headerInverted = true"
              class="thenme-checkbox pointer"
            >
              <img :src="headerThemeDark" alt="headerThemeDark" />
            </div>
            <div v-show="layConfig.headerInverted" class="checked">
              <n-icon color="#18a058" size="10">
                <Ellipse />
              </n-icon>
            </div>
          </n-gi>
        </n-grid>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { EllipsisVertical, Ellipse } from '@vicons/ionicons5';
import { defineComponent, inject, ref } from 'vue';
import navThemeDark from './svg/nav-theme-dark.svg';
import navThemeLight from './svg/nav-theme-light.svg';
import headerThemeDark from './svg/header-theme-dark.svg';
export default defineComponent({
  name: 'LaySetting',
  components: {
    Ellipse,
    EllipsisVertical,
  },
  setup() {
    const layConfig: any = inject('layConfig');
    return {
      navThemeDark,
      navThemeLight,
      headerThemeDark,
      layConfig,
      show: ref(false),
    };
  },
});
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
.setting-btn {
  padding: 5px;
}
.thenme-box {
  padding-bottom: 10px;
}
.thenme-checkbox,
.checked {
  display: flex;
  justify-content: center;
}
.thenme-checkbox {
  padding-bottom: 5px;
}
</style>
