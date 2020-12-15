<template>
  <router-view />
</template>

<script lang='ts'>
import {onMounted, ref, reactive} from 'vue'

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
      book
    }
  }
}
</script>

<style lang="less" scoped>

</style>
