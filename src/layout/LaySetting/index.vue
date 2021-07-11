<template>
  <n-icon class="setting-btn lay-hover" @click="show = true" size="16">
    <ellipsis-vertical />
  </n-icon>
  <n-drawer v-model:show="show" :width="300">
    <n-drawer-content title="项目配置">
      <set-theme />
      <set-navigation />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
  import { EllipsisVertical } from '@vicons/ionicons5';
  import { defineComponent, ref } from 'vue';
  import { NDrawer, NDrawerContent } from 'naive-ui';
  import SetNavigation from './SetNavigation.vue';
  import SetTheme from './SetTheme.vue';
  export default defineComponent({
    name: 'LaySetting',
    components: {
      NDrawer,
      NDrawerContent,
      SetTheme,
      SetNavigation,
      EllipsisVertical
    },
    setup() {
      return {
        show: ref(false)
      };
    }
  });
</script>

<style lang="scss"></style>
