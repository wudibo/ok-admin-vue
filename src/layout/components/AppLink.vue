<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script lang="ts">

export default {
  name: "AppLink",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal(): boolean {
      return (this as any).headerExternal((this as any).to)
    },
    type() {
      if ((this as any).isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to: string) {
      if ((this as any).isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    },
    headerExternal(path: string): boolean {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
  }
}
</script>
