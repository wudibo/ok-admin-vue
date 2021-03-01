<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
@import './assets/css/common';

html, body, #app {
  height: 100%;
}
</style>