<template>
  <div class="page">
    <div class="cont">
      <a-button @click="cont++">
        click {{cont}}
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue'

export default {
  setup() {
    const collapsed = ref(false),
        cont = ref(0);
    onMounted(function (){
      console.log('onMounted');
    })
    return {
      cont,
      collapsed
    }
  }
}
</script>

<style lang="less" scoped>
.cont {
  padding: 20px;
}

.flex {
  display: flex;
}
</style>
