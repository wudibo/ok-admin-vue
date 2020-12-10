<template>
  <div>{{ readersNumber }}</div>
  <div>{{ book.title }}</div>
</template>

<script type='text/ecmascript-6'>
import {onMounted, ref, reactive} from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({title: 'Vue 3 Guide'})
    onMounted(() => {
      console.log('mounted!')
    })
    // expose to template
    return {
      readersNumber,
      book
    }
  }
}
</script>

<style lang="less" scoped>

</style>