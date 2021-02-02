<template>
  <div class="page">
    <cards class="padding-xs-tb"/>
    <nav-link class="padding-xs-tb"></nav-link>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive, SetupContext, getCurrentInstance} from 'vue'
import Cards from "@/views/index/components/Cards.vue";
import NavLink from "@/views/index/components/NavLink.vue";
interface Data {
  [key: string]: unknown;
}
export default {
  components: {NavLink, Cards},
  setup(props: Data, context: SetupContext) {

    const {proxy} = getCurrentInstance() as any,
     readersNumber = ref(0),
     book = reactive({
      title: 'Vue 3 Guide',
      food: 'bar'
    })
    onMounted(() => {
      console.log(proxy.$http);
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
