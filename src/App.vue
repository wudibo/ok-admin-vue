<template>
  <router-view/>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
</template>

<script>
/*https://blog.csdn.net/winorlose2000/article/details/109215097*/
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
html, body, #app {
  height: 100%;
}
</style>
