<template>
  <scroll-pane>
    <div class="tags-view">
      <div class="tags-item">
        <a-button type="primary">
          <span>首页</span>
        </a-button>
      </div>
      <div v-for="item in 60" :key="item" class="tags-item">
        <a-button>
          <div class="tags-text">菜单列表{{item}}</div>
          <div class="close">
            <CloseOutlined/>
          </div>
        </a-button>
      </div>
    </div>
  </scroll-pane>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref} from 'vue'
import ScrollPane from './ScrollPane.vue';
import {CloseOutlined} from '@ant-design/icons-vue';

export default {
  components: {
    ScrollPane,
    CloseOutlined
  },
  setup() {
    let visible = ref(false),
        active = ref('');

    return {
      visible,
      active
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

.tags-view {
  display: flex;
  align-items: center;
  line-height: 48px;
  overflow-y: hidden;
  overflow-x: auto;
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
