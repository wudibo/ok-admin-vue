<template>
  <n-grid x-gap="12" cols="8" responsive="screen">
    <n-gi v-for="item in 8" :key="item">
      <!-- :xs="3" :sm="3" :md="3" :lg="3" -->
      <div class="bg-white link-cont">
        <!-- <user-outlined class="text-f24" :theme="'filled'"/> -->
        <div class="padding-top-xs" style="color: var(--primaryColor)">用户{{ item }}</div>
      </div>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { NCard, NGrid, NGi } from 'naive-ui';

  onMounted(function () {
    console.log('onMounted');
  });
</script>

<style lang="scss" scoped>
  .link-cont {
    background: white;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s;
    border-radius: 4px;
    padding: 20px;

    &:hover {
      border-color: #eee;
      // .boxShadow();
    }
  }
</style>
