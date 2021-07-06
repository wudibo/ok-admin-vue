<template>
  <router-view v-slot="{ Component, route }">
    <div class="lay-main" v-show="route.meta.keepAlive">
      <transition
        appear
        :name="route.meta.transition || 'fade-transform'"
        mode="out-in"
      >
        <keep-alive>
          <component
            v-if="route.meta.keepAlive"
            :key="route.meta.keepAlive ? route.path : ''"
            :is="Component"
          />
        </keep-alive>
      </transition>
    </div>
    <div class="lay-main" v-show="!route.meta.keepAlive">
      <transition
        appear
        :name="route.meta.transition || 'fade-transform'"
        mode="out-in"
      >
        <component v-if="!route.meta.keepAlive" :is="Component" />
      </transition>
    </div>
  </router-view>
</template>
<script lang="ts">
export default {
  name: 'layMain'
};
</script>
<style lang="scss" scoped>
.lay-main {
  padding: 12px 24px;
}
</style>
