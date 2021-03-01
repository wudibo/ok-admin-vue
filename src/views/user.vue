<template>
  <div>个人中心</div>
  <div>
    <a-button @click="reduceCurrent">减少 {{ $store.state.admin.current }}</a-button>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";
import {onMounted} from "vue";
export default {
  name: "user",
  setup: () => {
    const $store = useStore();
    return {
      reduceCurrent: () => {
        $store.commit('admin/SET_CURRENT', -1)
      }
    }
  }
}
</script>

<style scoped>

</style>