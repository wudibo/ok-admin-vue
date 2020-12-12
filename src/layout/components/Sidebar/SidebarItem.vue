<template>
  <template v-if="hasOneShowingChild(item.children,item) &&
            (!onlyOneChild.children||onlyOneChild.noShowingChildren) &&
            !item.alwaysShow">
    <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
      <a-menu-item :key="resolvePath(onlyOneChild.path)">{{ onlyOneChild.meta.title }}</a-menu-item>
    </app-link>
  </template>
  <a-sub-menu v-else key="sub2" :key="resolvePath(item.path)">
    <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"/>
    <template #title>
      {{item.meta.title}}
    </template>
  </a-sub-menu>
</template>

<script type='text/ecmascript-6'>
import path from "path";
import {onMounted, ref} from 'vue'
import AppLink from './Link.vue'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    AppLink,
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
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
