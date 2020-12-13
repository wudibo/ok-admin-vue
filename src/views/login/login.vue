<template>
  <div class="box">{{ readersNumber }}</div>
  <div class="flex">{{ book.title }}</div>
</template>

<script lang="ts">
import {onMounted, ref, reactive} from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({title: 'Vue 3 Guide'})
    onMounted(() => {
      console.log('mounted!')
    })
    return {
      readersNumber,
      book
    }
  }
}
</script>

<style lang="less" scoped>
  .flex{
    display: flex;
    animation: alternate;
    justify-content: center;
  }
  @keyframes alternate {

  }
</style>
