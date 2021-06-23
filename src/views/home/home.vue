<template>
  <div class="home">
    <n-h2>平山道</n-h2>
    <div v-for="item in 5" :key="item" class="flex">
      <n-button size="small" type="success" @click="testFun">城府路</n-button>
      {{ obj.current }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {NButton, NH2} from "naive-ui";

export default defineComponent({
  components: {
    NH2,
    NButton
  },
  setup(props, superContext) {
    console.log(import.meta.env)
    const obj = reactive({
      current: 1
    })
    const testFun = () => {
      obj.current = Math.random() * 1000
    }
    return {
      obj,
      testFun
    }
  }
})
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  font-size: 24px;
}
</style>
