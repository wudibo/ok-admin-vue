<template>
  <component :is="type" v-bind="linkProps">
    <slot/>
  </component>
</template>

<script lang="ts">
import {isExternal} from '@/utils/validate.ts'

export default {
  name: "AppLink",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props: { to: string }) {
    let linkProps, type;
    if (isExternal(props.to)) {
      type = "a";
      linkProps = {
        href: props.to,
        target: '_blank',
        rel: 'noopener'
      }
    } else {
      type = "router-link";
      linkProps = {
        to: props.to
      }
    }

    return {
      type,
      linkProps,
    }
  },
}
</script>
