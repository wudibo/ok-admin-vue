<template>
  <router-view v-slot="{ Component, route }">
    <div class="lay-main">
      <transition
        appear
        :name="route.meta.transition || 'fade-transform'"
        mode="out-in"
      >
        <keep-alive v-if="keepAlives" :include="keepAlives">
          <component :key="route.fullPath" :is="Component" />
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath" />
      </transition>
    </div>
  </router-view>
</template>
<script lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { defineComponent, watch } from 'vue';

export default defineComponent({
  name: 'layMain',
  setup() {
    const route = useRoute();
    const store = useStore();
    const keepAlives = store.getters['admin/keepAlivesGetter'];
    watch(
      route,
      () => {
        if (route.meta && route.meta.keepAlive) {
          store.commit(
            'admin/ADD_KEEPALIVES',
            route.matched[route.matched.length - 1].components.default.name
          );
        }
      },
      {
        immediate: true
      }
    );
    return { keepAlives };
  }
});
</script>
<style lang="scss" scoped>
.lay-main {
  padding: 12px 24px;
}
</style>
