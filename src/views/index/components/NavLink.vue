<template>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 24}">
    <a-col v-for="item in 8" :key='item' :xs="3" :sm="3" :md="3" :lg="3">
      <div class="padding-5">
        <div class="bg-white link-cont">
          <user-outlined class="text-f24" :theme="'filled'"/>
          <div class="padding-top-xs">用户{{ item }}</div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script lang='ts'>
import {onMounted} from 'vue'
import {UserOutlined} from '@ant-design/icons-vue';

export default {
  name: 'NavLink',
  components: {UserOutlined},
  setup() {
    onMounted(function () {
      console.log('onMounted');
    })
    return {}
  }
}
</script>

<style lang="less" scoped>
.link-cont {
  text-align: center;
  color: #1890ff;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all .2s ease-in-out;
  border-radius: 4px;
  padding: 20px;

  &:hover {
    border-color: #eee;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
}
</style>
