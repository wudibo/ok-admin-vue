<template>
  <div>
    <n-divider>系统主题</n-divider>
    <n-grid gap="2" :cols="8">
      <n-gi v-for="(item, index) in store.state.theme.appThemeList" :key="index">
        <div
          @click="handleTheme(item)"
          class="item"
          :style="{ backgroundColor: item.primaryColor }"
        >
          <n-icon v-show="item === store.state.theme.appTheme">
            <CheckmarkSharp />
          </n-icon>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { NDivider, NGrid, NGi, NIcon } from 'naive-ui';
  import { CheckmarkSharp } from '@vicons/ionicons5';
  export default defineComponent({
    name: 'SetTheme',
    components: {
      NGrid,
      NGi,
      NIcon,
      NDivider,
      CheckmarkSharp
    },
    setup() {
      const store = useStore();
      return {
        store,
        handleTheme(themeColor: string) {
          store.commit('theme/SET_APPTHEME', themeColor);
        }
      };
    }
  });
</script>

<style lang="scss" scoped>
  .item {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 2px;
    margin: 0 5px 5px 0;
    text-align: center;
    color: #ffffff;
  }
</style>
