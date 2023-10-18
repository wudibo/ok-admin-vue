<template>
  <div class="app-container">
    <n-button type="primary" @click="convertStyles">Convert to CSS</n-button>
    <n-grid x-gap="12" y-gap="12" cols="l:2 xs:2 s:2 m:2" responsive="screen">
      <n-gi>
        <h2>Input React Native Styles</h2>
        <n-input
          v-model:value="inputStyles"
          type="textarea"
          rows="24"
          placeholder="输入需要转换的样式"
        />
      </n-gi>
      <n-gi>
        <h2>Output CSS Styles</h2>
        <n-input
          :value="outputStyles"
          type="textarea"
          rows="24"
          readonly
          placeholder="转换之后的样式"
        ></n-input>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { convertRNToCSS } from './utils'
  const inputStyles = ref('')
  const outputStyles = ref('')

  function convertStyles() {
    try {
      outputStyles.value = convertRNToCSS(inputStyles.value)
    } catch (e) {
      console.error('Error parsing input styles:', e)
    }
  }
</script>
