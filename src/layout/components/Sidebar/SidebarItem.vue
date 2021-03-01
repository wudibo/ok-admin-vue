<template>
  <template v-if="hasOneShowingChild(item.children,item) &&
            (!onlyOneChild.children||onlyOneChild.noShowingChildren) &&
            !item.alwaysShow">
    <a-menu-item v-if="onlyOneChild.meta" :key="resolvePath(onlyOneChild.path)">
      <app-link :to="resolvePath(onlyOneChild.path)" @click="headerAddTag(onlyOneChild)">
        <span>
          <ok-icon v-if="onlyOneChild.meta && onlyOneChild.meta.icon" :type="onlyOneChild.meta.icon"></ok-icon>
          <smile-outlined v-else/>
          <span>{{ onlyOneChild.meta.title }}</span>
        </span>
      </app-link>
    </a-menu-item>
  </template>
  <a-sub-menu v-else
              :key="basePath">
    <template #title>
      <span>
        <ok-icon v-if="item.meta && item.meta.icon" :type="item.meta.icon"></ok-icon>
        <ok-icon v-else type="ok-icon-round_favor_fill"/>
        <!--        <smile-outlined v-else/>-->
        <!--        {{item.meta.icon}}-->
        <span>{{ item.meta.title }}</span>
      </span>
    </template>
    <sidebar-item v-for="child in item.children"
                  :key="resolvePath(child.path)"
                  :is-nest="true"
                  :item="child"
                  :base-path="resolvePath(child.path)"
                  class="nest-menu"/>
  </a-sub-menu>
</template>

<script type="ts">
import path from '@/utils/path';
import AppLink from '../AppLink.vue';

import {
  SmileOutlined,
} from '@ant-design/icons-vue';
import {mapGetters, mapMutations} from "vuex";
import {useRoute} from "vue-router";

export default {
  name: "SidebarItem",
  components: {
    SmileOutlined,
    AppLink,
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('admin', {
      routerList: 'routesGetter'
    })
  },
  setup() {
    const $route = useRoute(),
        selectedKeys = [$route.path];
    return {
      selectedKeys,
      onlyOneChild: null
    }
  },
  methods: {
    ...mapMutations('admin', [
      'SET_ROUTES'
    ]),
    headerAddTag(onlyOneChild) {
      const basePath = this.resolvePath(onlyOneChild.path);
      const routerList = this.routerList || [];
      let _index = -1;
      routerList.forEach((item, index) => {
        item.checked = item.basePath === basePath;
        item.basePath === basePath ? _index = index : '';
      });
      if (_index < 0) {
        routerList.push({
          ...JSON.parse(JSON.stringify(onlyOneChild)),
          checked: true,
          basePath
        });
      }
      this.SET_ROUTES(routerList)
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (this.headerExternal(routePath)) {
        return routePath
      }
      if (this.headerExternal(this.basePath)) {
        return this.basePath
      }
      // console.log(path.resolve(this.basePath, routePath));
      return path.resolve(this.basePath, routePath);
    },
    headerExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
