<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { darkTheme, NConfigProvider } from 'naive-ui';
  const name = 'App';
  const store = useStore();
  const appTheme = computed(() => store.getters['theme/appThemeGetter']);
  const themeOverrides = reactive({
    common: appTheme
  });
</script>

<style lang="scss"></style>
