<template>
  <div
    :style="{
      '--primary-color': themeOverrides.common.primaryColor,
      '--primary-color-hover': themeOverrides.common.primaryColorHover,
      '--primary-color-pressed': themeOverrides.common.primaryColorPressed
    }"
  >
    <n-config-provider :theme-overrides="themeOverrides">
      <n-loading-bar-provider ref="loadingBar">
        <router-view />
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, nextTick, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui';

const name = 'App';
const store = useStore();
const route = useRoute();
const loadingBar: any = ref(null);

const themeOverrides = computed(() => ({ common: store.getters['theme/appThemeGetter'] }));
onMounted(() => {
  watch(route, (to) => {
    loadingBar.value?.start();
    nextTick(() => {
      loadingBar.value?.finish();
    });
  });
});
</script>

<style lang="scss"></style>
