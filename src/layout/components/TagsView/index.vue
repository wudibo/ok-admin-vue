<template>
  <scroll-pane>
    <div class="tags-view">
      <div class="tags-item">
        <AppLink :to="'/'">
          <a-button type="primary">
            <span>首页</span>
          </a-button>
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
import {onMounted, ref, getCurrentInstance} from 'vue'
import ScrollPane from './ScrollPane.vue';
import {CloseOutlined} from '@ant-design/icons-vue';
import AppLink from '../AppLink.vue';
import {mapGetters} from "vuex";

export default {
  components: {
    AppLink,
    ScrollPane,
    CloseOutlined
  },
  computed: {
    ...mapGetters('admin', {
      routerList: 'routesGetter'
    })
  },
  setup() {
    const visible = ref(false),
        {ctx} = getCurrentInstance() as any,
        active = ref('');
    onMounted(function () {
      console.log(active);
    });
    const headerSelectTag = (route: any) => {
      ctx.routerList.forEach((item: any) => item.checked = false);
      route.checked = true
    }
    const headerCloseTag = (route: any, index: number) => {
      ctx.routerList.splice(index, 1);
    };
    return {
      active,
      visible,
      headerSelectTag,
      headerCloseTag,
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

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
