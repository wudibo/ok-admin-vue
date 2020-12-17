<template>
  <div class="flex" style="font-size: 18px;">登录页</div>
  <div class="box">{{ readersNumber }}</div>
  <div class="flex">
    <div class="cont">
      <v-scroll>
        <div style="font-size: 0">
          <div class="inline-block">使用网络加载json的时候请将jsonnjs源放置</div>
          <div class="inline-block">使用网络加载json的时候请将jsonnjs源放置</div>
        </div>
      </v-scroll>
    </div>
  </div>
<!--  300 / 600000 / 300-->
</template>

<script lang="ts">
import {onMounted, ref, reactive} from 'vue'
import VScroll from '@/components/okscroll/index.vue'

export default {
  components: {
    VScroll
  },
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
.cont {
  width: 300px;
  height: 48px;
  line-height: 48px;
  background: #d5d5d5;
  .inline-block{
    width: 600px;
    font-size: 16px;
    box-sizing: border-box;
    display: inline-block;
  }
}

.flex {
  font-size: 16px;
  display: flex;
  animation: alternate;
  justify-content: center;
}

@keyframes alternate {

}
</style>

