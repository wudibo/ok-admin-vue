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
import {onMounted, nextTick, ref, Ref} from 'vue';
import {useRoute} from 'vue-router';

const handleRouterMatched = (route: any) => {
  const matched: any = route.matched.filter((item: any) => {
    let bool = false;
    if (item.meta.title || item.name) {
      bool = true
    }
    return bool;
  });
  return matched;
}
export default {
  name: "Breadcrumb",
  watch: {
    $route(){
      const self = this as any;
      self.levelList = handleRouterMatched(self.$route);
    },
  },
  setup() {
    const $route = useRoute();
    const levelList: Ref<any> = ref(handleRouterMatched($route));

    return {
      levelList
    }
  }
}
</script>

<style lang="less" scoped>

</style>
