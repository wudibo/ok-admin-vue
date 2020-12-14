<template>
  <template v-if="hasOneShowingChild(item.children,item) &&
            (!onlyOneChild.children||onlyOneChild.noShowingChildren) &&
            !item.alwaysShow">
    <a-menu-item v-if="onlyOneChild.meta" :key="resolvePath(onlyOneChild.path)">
      <app-link :to="resolvePath(onlyOneChild.path)" @click="headerAddTag(onlyOneChild, basePath)">
        <span>
          <ok-icon type="ok-icon-likefill"></ok-icon>
          <span>{{ onlyOneChild.meta.title }}</span>
        </span>
      </app-link>
    </a-menu-item>
  </template>
  <a-sub-menu v-else :key="resolvePath(item.path)">
    <template #title>
      <span>
        <PieChartOutlined/>
        <span>{{ item.meta.title }}</span>
      </span>
    </template>
    <sidebar-item v-for="child in item.children"
                  :key="child.path"
                  :is-nest="true"
                  :item="child"
                  :base-path="resolvePath(child.path)"
                  class="nest-menu"/>
  </a-sub-menu>
</template>

<script type="es6">
// const path = require('path');
import path from "path";
import AppLink from '../AppLink.vue'
import {
  PieChartOutlined,
} from '@ant-design/icons-vue';
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {
    PieChartOutlined,
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
    // console.log(props);
    return {
      onlyOneChild: null
    }
  },
  methods: {
    ...mapMutations('admin', [
      'SET_ROUTES'
    ]),
    headerAddTag(onlyOneChild, basePath) {
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
