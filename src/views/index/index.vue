<template>
  <div class="page">
    <cards class="padding-xs-tb"/>
    <card-link class="padding-xs-tb"></card-link>
    <div class="padding-xs-tb">
      <div class="padding-xs-tb test">成功</div>
      <!--      <hello-test>按钮</hello-test>-->
    </div>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive, SetupContext, getCurrentInstance} from 'vue'
import Cards from "@/views/index/components/Cards.vue";
import CardLink from "@/views/index/components/CardLink.vue";

// import HelloTest from "@/views/index/components/HelloTest.tsx";

interface Data {
  [key: string]: unknown;
}

export default {
  components: {CardLink, Cards},
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
.page {
  padding: 10px 20px;
}

.bg-white {
  background: white;
}

.padding-xs-tb {
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>
