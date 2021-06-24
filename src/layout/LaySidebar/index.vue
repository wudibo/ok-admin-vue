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
      <div class="head" :class="{'head-inverted': layConfig.sidebarInverted}">
        <img class="img" alt="logo" src="/src/assets/head.png"/>
      </div>
      <n-menu
          :inverted="layConfig.sidebarInverted"
          :indent="22"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          @update:value="handleUpdateValue"
          @update:expanded-keys="menuKeys = $event"
          v-model="menuKey"
          :default-value="menuKey"
          :expanded-keys="menuKeys"
          :options="menuOptions"
      />
    </div>
  </n-layout-sider>
</template>

<script lang="ts">
import {useRouter, useRoute} from 'vue-router'
import {inject, ref, defineComponent} from 'vue'
import menuOptions from "./menuOptions";
import {NLayoutSider, NImage, NMenu, NSpace, NSwitch} from 'naive-ui'

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
    const router = useRouter(),
        route = useRoute(),
        menuKey = ref(route.fullPath),
        menuKeys = ref(['dance-dance-dance', 'food']),
        layConfig: any = inject('layConfig');
    return {
      layConfig,
      menuKeys,
      menuKey,
      menuOptions,
      getSrc: (path: string) => {
        const patha = "../../assets/head.png"
        const modules = import.meta.globEager("../../assets/head.png");
        console.log(modules[patha].default);
        return modules[patha].default;
      },
      handleUpdateValue: (route: any) => {
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

  .head {
    overflow: hidden;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-bottom: solid 1px rgb(239, 239, 245);
    transition: .25s border-bottom-color;

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