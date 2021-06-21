<template>
  <n-layout-sider
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed="layConfig.collapsed"
      :inverted="layConfig.sidebarInverted"
      :collapsed-width="64"
      bordered
  >
    <div class="lay-sidebar">
      <n-menu
          :inverted="layConfig.sidebarInverted"
          :indent="22"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          @update:value="handleUpdateValue"
          v-model="menuKey"
          :options="menuOptions"
      />
    </div>
  </n-layout-sider>
</template>

<script lang="ts">
import {useRouter} from 'vue-router'
import {inject, defineComponent} from 'vue'
import menuOptions from "./menuOptions";
import {NLayoutSider, NMenu, NSpace, NSwitch} from 'naive-ui'

export default defineComponent({
  name: "LaySidebar",
  components: {
    NLayoutSider,
    NMenu,
    NSpace,
    NSwitch
  },
  setup(props, superContext) {
    const router = useRouter();
    const menuKey = '/home';
    const layConfig: any = inject('layConfig');
    return {
      layConfig,
      menuKey,
      menuOptions,
      handleUpdateValue: (route: string) => {
        router.push(route);
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.lay-sidebar {
  ::v-deep {
    .n-menu .n-menu-item::before {
      left: 0;
      right: 0;
      border-radius: 0
    }
  }
}

</style>
