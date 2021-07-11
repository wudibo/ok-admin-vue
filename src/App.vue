<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent, computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { darkTheme, NConfigProvider } from 'naive-ui';

  export default defineComponent({
    name: 'App',
    components: {
      NConfigProvider
    },
    setup() {
      const store = useStore();
      const appTheme = computed(() => store.getters['theme/appThemeGetter']);
      const themeOverrides = reactive({
        common: {
          primaryColor: appTheme,
          primaryColorHover: appTheme
        }
      });
      return {
        darkTheme,
        themeOverrides
      };
    }
  });
</script>

<style lang="scss"></style>
