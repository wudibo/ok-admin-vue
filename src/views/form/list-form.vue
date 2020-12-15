<template>
  <div class="page">
    <div>{{ readersNumber }}</div>
    <div>{{ book.title }}</div>
    <a-button type="primary" @click="headerNumber">click {{ book.food }} {{ readersNumber }}</a-button>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive, Ref} from 'vue'

const headerNumberFactory = (readersNumber: Ref<number>) => () => {
  readersNumber.value++
}
export default {
  setup() {
    const readersNumber = ref(0);
    const book = reactive({
      title: 'Vue 3 Guide',
      food: 'bar'
    })
    const headerNumber = headerNumberFactory(readersNumber);
    onMounted(() => {
      console.log('mounted!')
    });
    // expose to template
    return {
      headerNumber,
      readersNumber,
      book
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  padding: 20px;
}
</style>
