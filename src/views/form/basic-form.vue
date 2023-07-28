<template>
  <div class="app-container">
    <div class="title">输入富文本可及时显示</div>
    <n-input v-model:value="value" type="textarea" rows="8" placeholder="基本的 Textarea" />
    <div class="html">
      <div v-html="value"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(`
    <img
      loading="eager"
      width="240"
      src="https://foruda.gitee.com/avatar/1669426812317011153/1326874_zhizous_1669426812.png"
    />
  `)
</script>

<style lang="scss" scoped>
  .title {
    font-size: 18px;
  }
  .html {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
