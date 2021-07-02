<template>
  <div class="home">
    <n-h2>ok-admin-vue</n-h2>
    <n-h3>store.current: {{ store.state.current }}</n-h3>
    <div v-for="item in 5" :key="item" class="flex">
      <n-button size="small" type="success" @click="testFun">城府路</n-button>
      {{ obj.current }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { NButton, NH2 } from 'naive-ui';

export default defineComponent({
  name: 'Home',
  components: {
    NH2,
    NButton,
  },
  setup(props, superContext) {
    const store = useStore();
    const obj = reactive({
      current: 1,
    });
    const testFun = () => {
      store.commit('SET_CURRENT', Math.random() * 100);
      obj.current = Math.random() * 1000;
    };
    return {
      store,
      obj,
      testFun,
    };
  },
});
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  font-size: 24px;
}
</style>
