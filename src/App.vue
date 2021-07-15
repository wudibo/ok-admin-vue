<template>
  <div :style="styles">
    <n-config-provider :theme-overrides="themeOverrides">
      <n-loading-bar-provider ref="loadingBar">
        <router-view />
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties, Ref } from 'vue';
import { computed, watch, ref, nextTick, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui';

const name = 'App';
const store = useStore();
const route = useRoute();
const loadingBar: any = ref(null);
const appTheme = computed(() => store.getters['theme/appThemeGetter']);

const themeOverrides = ref({
  common: appTheme
});

const styles = ref({
  '--primary-color': appTheme.value.primaryColor,
  '--primary-color-hover': appTheme.value.primaryColorHover,
  '--primary-color-pressed': appTheme.value.primaryColorPressed
}) as Ref<CSSProperties>;

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
