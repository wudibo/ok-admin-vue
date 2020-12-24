<template>
  <div class="page">
    <cards class="padding-xs-tb"/>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive, SetupContext ,getCurrentInstance} from 'vue'
import Cards from "@/views/index/components/Cards.vue";
interface Data {
  [key: string]: unknown;
}
export default {
  components: {Cards},
  setup(props: Data, context: SetupContext) {
    const instance = getCurrentInstance(),
     readersNumber = ref(0),
     book = reactive({
      title: 'Vue 3 Guide',
      food: 'bar'
    })

    onMounted(() => {
      if(instance){
        const {$http} = instance.appContext.config.globalProperties;
        console.log($http);
      }
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
