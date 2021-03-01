<template>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 24}">
    <a-col v-for="item in 8" :key='item' :xs="12" :sm="6" :md="4" :lg="3" class="padding-bottom-sm">
      <div class="bg-white link-cont">
        <user-outlined class="text-f24" :theme="'filled'"/>
        <div class="padding-top-xs">用户{{ item }}</div>
      </div>
    </a-col>
  </a-row>
</template>

<script lang='ts'>
import {onMounted} from 'vue'
import {UserOutlined} from '@ant-design/icons-vue';

export default {
  name: 'CardLink',
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
  color: @main-color;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all .2s;
  border-radius: 4px;
  padding: 20px;

  &:hover {
    border-color: #eee;
    .boxShadow();
  }
}
</style>
