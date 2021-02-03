<template>
  <scroll-pane>
    <div class="tags-view">
      <div class="tags-item">
        <AppLink :to="'/'">
          <a-space size="small">
            <a-button type="primary">
              <span>首页</span>
            </a-button>
          </a-space>
        </AppLink>
      </div>
      <div v-for="(item,index) in routerList" :key="item.basePath" class="tags-item">
        <AppLink :to="item.basePath" @click="headerSelectTag(item)">
          <a-button :type="item.checked?'primary':''">
            <div class="tags-text">{{ item.meta ? item.meta.title : item.name }}</div>
            <div @click.prevent.stop="headerCloseTag(item, index)" class="close">
              <CloseOutlined/>
            </div>
          </a-button>
        </AppLink>
      </div>
    </div>
  </scroll-pane>
</template>

<script lang="ts">
import {ref, computed} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {CloseOutlined} from '@ant-design/icons-vue';
import AppLink from '../AppLink.vue';
import ScrollPane from './ScrollPane.vue';
import {IVuexRoutes} from '@/layout/index.d.ts';
import {ComputedRef} from "@vue/reactivity";

export default {
  name: "TagsView",
  components: {
    AppLink,
    ScrollPane,
    CloseOutlined
  },
  setup() {
    const visible = ref(false),
        $router = useRouter(),
        $store = useStore(),
        active = ref('');
    const routerList: ComputedRef<Array<IVuexRoutes>> = computed(() => {
      return $store.getters["admin/routesGetter"]
    });

    const headerSelectTag = (route: IVuexRoutes) => {
      routerList.value.forEach((item) => item.checked = false);
      route.checked = true;
      $store.commit('admin/SET_SELECTEDKEYS', [route.basePath]);
    }

    const headerCloseTag = (route: IVuexRoutes, index: number) => {
      if (index == 0) {
        routerList.value.splice(index, 1);
      } else {
        const routePrev = routerList.value[index - 1];
        if (route.checked) {
          routePrev.checked = true;
          $router.replace(routePrev.basePath);
          $store.commit('admin/SET_SELECTEDKEYS', [routePrev.basePath]);
        }
        routerList.value.splice(index, 1);
      }
    };
    return {
      active,
      visible,
      routerList,
      headerSelectTag,
      headerCloseTag,
    }
  }
}
</script>

<style lang="less" scoped>
.tags-view {
  display: flex;
  align-items: center;
  //overflow-x: auto;
  //overflow-y: hidden;
  .tags-item {
    padding: 0 5px;

    &.active .ant-btn {
      color: rgb(255, 255, 255);
      background-color: rgb(24, 144, 255);
      border-color: rgb(24, 144, 255);
      text-shadow: rgba(0, 0, 0, 0.12) 0 -1px 0;
      box-shadow: rgba(0, 0, 0, 0.043) 0 2px 0;
    }

    .ant-btn {
      border-color: transparent;
      box-shadow: none;
      padding: 0 10px;
    }

    .tags-text {
      display: inline-flex;
    }

    .close {
      margin-left: 5px;
      display: inline-block;
      font-size: 12px;
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 100%;
      transition: color, background-color .3s;

      &:hover {
        color: #ffffff;
        background-color: @main-color;
      }
    }
  }
}
</style>
