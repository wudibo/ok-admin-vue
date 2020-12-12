<template>
  <div class="tags-view">
    <div class="tags-item">
      <a-button :type="active">
        <span>首页</span>
      </a-button>
    </div>
    <div class="tags-item">
      <a-button>
        <span>菜单列表</span>
        <div class="ok-icon ok-icon-close"></div>
      </a-button>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref} from 'vue'

export default {
  setup() {
    let collapsed = ref(false),
        active = ref('');

    return {
      siderWidth: 256,
      collapsed,
      active
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/variable";

.tags-view {
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background: @dark-color;
  //background: @content-bg;
  .tags-item{
    padding: 0 5px;
    .ant-btn{
      border-color: transparent;
      box-shadow: none;
      padding: 0 10px;
    }
    .ok-icon{
      display: inline-block;
      font-size: 12px;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      transition: color, background-color .3s;
      &:hover{
        color: #ffffff;
        background-color: @main-color;
      }
    }
  }
}
</style>
