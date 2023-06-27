<script lang="ts">
  import themeStore from './stores/themeStore'
  import { defineComponent, watchEffect, computed, ref } from 'vue'
  import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui'
  export default defineComponent({
    name: 'APP',
    components: {
      NConfigProvider,
      NLoadingBarProvider
    },
    setup: () => {
      const store = themeStore()
      const themeOverrides: any = ref(null)
      /** 是否是暗夜主题 */
      const isDarkTheme = computed(() => store.isDarkThemeGetter)
      /** 设置主题 */
      const body = document.body
      watchEffect(() => {
        const theme = store.appThemeGetter
        themeOverrides.value = {
          common: theme
        }
        body.style.setProperty('--primary-color', theme.primaryColor)
        body.style.setProperty('--primary-color-hover', theme.primaryColorHover)
        body.style.setProperty('--primary-color-pressed', theme.primaryColorPressed)
      })
      return {
        isDarkTheme,
        darkTheme,
        themeOverrides
      }
    }
  })
</script>

<template>
  <NConfigProvider :theme="isDarkTheme ? darkTheme : null" :theme-overrides="themeOverrides">
    <NLoadingBarProvider>
      <router-view />
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<style lang="scss">
  @import './assets/css/main.scss';
</style>
