<!-- 
  * @describe: 主内容区组件
-->

<template>
  <n-button @click="handleReload">点击</n-button>
  <router-view v-slot="{ Component, route }">
    <transition appear :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive v-if="keepAlives" :include="keepAlives">
        <component v-if="reload" :key="route.fullPath" :is="Component" />
      </keep-alive>
      <component v-else-if="reload" :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'layMain',
  setup() {
    const reload = ref(true);
    const store = useStore();
    const keepAlives = store.getters['admin/keepAlivesGetter'];

    return {
      keepAlives, reload, handleReload() {
        const a = keepAlives[0]
        store.commit('admin/DEL_KEEPALIVES', a);
        reload.value = false;
        setTimeout(() => {
          store.commit('admin/ADD_KEEPALIVES', a);
          reload.value = true;
        }, 150)
      }
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
