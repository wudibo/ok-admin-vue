<template>
  <div class="app-container">
    <n-card style="margin-bottom: 20px;" :bordered="false" title="回显示符文本">
      <div class="flex-col" v-html="html"></div>
    </n-card>
    <n-card :bordered="false" title="输入符文本">
      <n-input
        v-model:value="html"
        type="textarea"
        placeholder="基本的 Textarea"
        :autosize="{
          minRows: 7,
          maxRows: 50,
        }"
      />
    </n-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BasicForm'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'

const html = ref(
`<div>
  <img src="https://foruda.gitee.com/avatar/1669426812317011153/1326874_zhizous_1669426812.png" />
</div>
<div>
  <img src= />
</div>`
)

</script>

<style lang="scss">
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
