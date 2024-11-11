<script lang="ts">
  import TheWelcome from '@/components/TheWelcome.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'HomeView',
    components: {
      TheWelcome
    },
    setup: () => {
      return {}
    }
  })
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
