<template>
  <n-scrollbar
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

      <!-- <div v-for="item in 40" :key="item" class="tag-item">
        <div class="tag-cont">
          <n-button @click="handleTagOpen('/home')" :bordered="false">
            <span>首页</span>
            <n-icon @click.stop="handleTagClose" class="tag-close">
              <close-sharp></close-sharp>
            </n-icon>
          </n-button>
        </div>
      </div> -->
    </div>
  </n-scrollbar>
</template>
<script lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import { Tag, tagsEffect, tagsScroll } from './index';
import {
  defineComponent,
  watchEffect,
  ref,
  reactive,
  onMounted,
  nextTick,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NButton, NScrollbar } from 'naive-ui';
import { CloseSharp } from '@vicons/ionicons5';

export default defineComponent({
  name: 'LayTag',
  inheritAttrs: false,
  components: {
    NButton,
    NScrollbar,
    CloseSharp,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const tags: Array<Tag> = reactive([]);
    const scrollbar = ref() as any;
    const layTag = ref() as any;

    /**tags处理 */
    tagsEffect(tags, route, router);

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
      /**打开tag路由 */
      handleTagOpen(fullPath: RouteLocationRaw) {
        router.push(fullPath);
      },

      /**关闭tag */
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
      },
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
$background: #ffffff;
.lay-tag-box {
  height: calc(100% + 17px);
  overflow-x: auto;
  overflow-y: hidden;
  background-color: $background;
}

.lay-tag {
  height: 48px;
  padding: 0 10px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f7f9;
  background-color: $background;
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
    &.n-button--primary-type{
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

  ::v-deep .n-button--default-type {
    .tag-close {
      color: #000000;
    }
  }
}
</style>
