<template>
  <div class="lay-tag-box">
    <n-scrollbar
      style="flex: 1"
      ref="scrollbar"
      :vertical-rail-style="{ bottom: 0 }"
      :scrollable="true"
      :x-scrollable="true"
    >
      <div class="lay-tag" ref="layTag">
        <div
          v-for="(item, index) in tags"
          class="tag-item"
          :key="item.fullPath"
          :class="item.fullPath === $route.fullPath ? 'tag-active' : ''"
        >
          <div class="tag-cont">
            <n-button
              class="tag-btn"
              @click="handleTagOpen(item.fullPath)"
              :type="item.fullPath === $route.fullPath ? 'primary' : 'default'"
              :bordered="false"
            >
              <span>{{ item.meta.title }}</span>
              <n-icon
                v-if="!isAffix(item)"
                @click.stop="handleTagClose(index)"
                class="tag-close"
              >
                <close-sharp></close-sharp>
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
    </n-scrollbar>
    <div class="lay-tag-menu">
      <n-dropdown
        trigger="hover"
        placement="bottom-end"
        @select="handleMenuSelect"
        :options="menuOptions"
      >
        <n-button style="width: 36px; height: 34px">
          <n-icon :size="18">
            <chevron-down-outline />
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  watchEffect,
  ref,
  reactive,
  onMounted,
  nextTick
} from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { ChevronDownOutline } from '@vicons/ionicons5';
import { Tag, tagsEffect, tagsScroll } from './index';
import { menuOptions, closeMenu } from './tagmenu';
import { NButton, NScrollbar, NIcon, NDropdown } from 'naive-ui';
import { useRouter, useRoute } from 'vue-router';
import { CloseSharp } from '@vicons/ionicons5';

export default defineComponent({
  name: 'LayTag',
  inheritAttrs: false,
  components: {
    NIcon,
    NButton,
    NScrollbar,
    NDropdown,
    ChevronDownOutline,
    CloseSharp
  },
  setup() {
    const router = useRouter(),
      route = useRoute();

    let tags: Array<Tag> = reactive([]);
    const scrollbar = ref() as any;
    const layTag = ref() as any;

    /**tags监听处理 */
    tagsEffect(tags, route);

    /**mounted生命周期 */
    onMounted(() => {
      const containerRef = scrollbar.value.containerRef;
      watchEffect(() => {
        tags.length;
        route.fullPath;
        nextTick(() => {
          tagsScroll(containerRef, layTag.value);
        });
      });
    });

    return {
      tags,
      layTag,
      scrollbar,
      menuOptions,

      /** 菜单选择事件 */
      handleMenuSelect(key: string) {
        closeMenu(key, tags, route, router);
      },
      /**打开tag路由 */
      handleTagOpen(fullPath: RouteLocationRaw) {
        router.push(fullPath);
      },
      /**关闭当前tag */
      handleTagClose(index: number) {
        if (tags[index].fullPath === route.fullPath) {
          if (index === 0) {
            router.replace(tags[index + 1].fullPath);
          } else {
            router.replace(tags[index - 1].fullPath);
          }
        }
        tags.splice(index, 1);
      },
      isAffix(tag: Tag) {
        return tag.meta && tag.meta.affix;
      }
    };
  }
});
</script>
<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
$background: #ffffff;
$tag-height: 48px;
.lay-tag-box {
  width: 100%;
  display: flex;
  height: $tag-height;
  background-color: $background;
  box-sizing: border-box;
  position: relative;
}
.lay-tag-menu {
  padding: 0 12px;
  height: $tag-height;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  // border-left: 1px solid rgba(226, 226, 226, 0.27);
}

.lay-tag {
  padding: 0 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: $tag-height;
}

.tag-item {
  font-size: 14px;
  padding: 0 5px;

  .tag-cont {
    background: #ffffff;
  }

  .tag-btn {
    border: 1px solid #e5e5e5;
    position: relative;
    box-sizing: border-box;
    @include percolate(border-color + ', ' + color);
    &.n-button--primary-type {
      border-color: $primary;
    }
    &:hover {
      border-color: $primary;
    }
  }

  .tag-close {
    font-size: 14px;
    padding: 5px;
    padding-right: 0;
    z-index: 5;

    &:hover {
      opacity: 0.5;
    }
  }

  ::v-deep(.n-button--default-type) {
    .tag-close {
      color: #000000;
    }
  }
}
</style>
