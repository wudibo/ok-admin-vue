<template>
  <div class="page">
    <cards class="padding-xs-tb"/>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive} from 'vue'
import Cards from "@/views/index/components/Cards.vue";

export default {
  components: {Cards},
  setup() {
    const readersNumber = ref(0);
    const book = reactive({
      title: 'Vue 3 Guide',
      food: 'bar'
    })

    onMounted(() => {
      console.log('onMounted');
    });

    return {
      readersNumber,
      book
    }
  }
}
</script>

<style lang="less" scoped>
.page{
  padding: 10px 20px;
}
.bg-white {
  background: white;
}
.padding-xs-tb{
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>
