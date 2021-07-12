<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { darkTheme, NConfigProvider } from 'naive-ui';
  
  const name = 'App';
  const store = useStore();
  const themeOverrides = computed(() => ({common: store.getters['theme/appThemeGetter']}))
  
  
</script>

<style lang="scss"></style>
