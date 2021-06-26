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
      <div class="head" :class="{ 'head-inverted': layConfig.sidebarInverted }">
        <img class="img" alt="logo" src="/src/assets/head.png" />
      </div>
      <n-menu
        :inverted="layConfig.sidebarInverted"
        :indent="22"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :key="menuConfig.menuKey"
        :default-value="menuConfig.menuKey"
        :expanded-keys="menuConfig.menuKeys"
        @update:value="handleUpdateValue"
        @update:expanded-keys="menuConfig.menuKeys = $event"
      />
    </div>
  </n-layout-sider>
</template>

<script lang="ts">
import { useRouter, useRoute } from "vue-router";
import { inject, reactive, watchEffect, defineComponent } from "vue";
import { NLayoutSider, NImage, NMenu, NSpace, NSwitch } from "naive-ui";
import { useMenu } from "./menuOptions";

export default defineComponent({
  name: "LaySidebar",
  components: {
    NLayoutSider,
    NImage,
    NMenu,
    NSpace,
    NSwitch
  },
  setup(props, superContext) {
    const menuOptions = useMenu();
    const router = useRouter(),
      route = useRoute(),
      menuConfig = reactive({
        menuKey: "",
        menuKeys: [""]
      }),
      layConfig: any = inject("layConfig");

    watchEffect(() => {
      menuConfig.menuKey = route.fullPath;
      menuConfig.menuKeys = route.matched.map((item) => {
        return item.path;
      });
    });

    return {
      menuConfig,
      layConfig,
      menuOptions,
      getSrc: (path: string) => {
        const patha = "../../assets/head.png";
        const modules = import.meta.globEager("../../assets/head.png");
        console.log(modules[patha].default);
        return modules[patha].default;
      },
      handleUpdateValue: (route: any) => {
        router.push(route);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.lay-sidebar {
  ::v-deep {
    .n-menu .n-menu-item::before {
      left: 0;
      right: 0;
      border-radius: 0;
    }
  }

  .head {
    overflow: hidden;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-bottom: solid 1px rgb(239, 239, 245);
    transition: 0.25s border-bottom-color;

    &-inverted {
      border-color: #000000;
    }

    .img {
      width: 90%;
      object-fit: scale-down;
    }
  }
}
</style>
