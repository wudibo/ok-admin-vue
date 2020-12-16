<template>
  <a-breadcrumb class="breadcrumb">
    <!--<a-breadcrumb-item href="/">
      <span>首页</span>
    </a-breadcrumb-item>-->
    <a-breadcrumb-item v-for="(item) in levelList" :key="item.path">
      <span>{{ item.meta.title || item.name }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang='ts'>
import {ref, watchEffect} from 'vue';
import {RouteLocationMatched, RouteLocation, useRoute} from 'vue-router';

const handleRouterMatched = (route: RouteLocation) => {
  const matched: Array<RouteLocationMatched> = route.matched.filter((item: RouteLocationMatched) => {
    let bool = false;
    if (item.meta.title || item.name) {
      bool = true
    }
    return bool;
  });
  return matched;
}
export default {
  name: "OkBreadcrumb",
  setup() {
    const $route = useRoute();
    const levelList = ref();
    watchEffect(() => {
      levelList.value = handleRouterMatched($route);
    });
    return {
      levelList
    }
  }
}
</script>

<style lang="less" scoped>

</style>
