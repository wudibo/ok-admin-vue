<template>
  <div>{{ readersNumber }}</div>
  <div>{{ book.title }}</div>
  <div @click="readersNumber++">click {{ book.food}} {{ readersNumber}}</div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive} from 'vue'
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'c1',
  width: 600,
  height: 300,
});
export default {
  setup() {
    const readersNumber = ref(0);
    const book = reactive({
      title: 'Vue 3 Guide',
      food: 'bar'
    })

    onMounted(() => {
      console.log('mounted!')
    })
    // expose to template
    return {
      readersNumber,
      chart,
      book
    }
  }
}
</script>

<style lang="less" scoped>

</style>
