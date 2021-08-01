<template>
  <div class="dark-box">
    <n-switch :value="isDarkTheme" @update:value="handleDarkTheme">
      <template #checked>
        <n-icon>
          <moon />
        </n-icon>
      </template>
      <template #unchecked>
        <n-icon>
          <sunny />
        </n-icon>
      </template>
    </n-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NSwitch, NIcon } from "naive-ui";
import { Sunny, Moon } from "@vicons/ionicons5";
export default defineComponent({
  name: "SetDark",
  components: { NSwitch, NIcon, Sunny, Moon },
  setup() {
    const store = useStore();
    const isDarkTheme = ref(store.getters['theme/isDarkThemeGetter']);

    return {
      isDarkTheme,
      handleDarkTheme(val: boolean) {
        isDarkTheme.value = val
        store.commit('theme/SET_ISDARKTHEME', val)
      }
    }
  }
})
</script>

<style lang="scss">
.dark-box {
  text-align: center;
}
</style>