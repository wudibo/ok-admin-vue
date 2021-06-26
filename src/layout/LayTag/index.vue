<template>
  <div class="lay-tag">
    <!-- <div class="tag-item">
      <n-button @click="handleTagOpen('/home')" :bordered="false">
        <span>首页</span>
        <n-icon @click.stop="handleTagClose" class="tag-close">
          <close-sharp></close-sharp>
        </n-icon>
      </n-button>
    </div> -->

    <div v-for="(item, index) in tags" :key="item.fullPath" class="tag-item">
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
</template>
<script lang="ts">
import type { RouteLocationRaw } from "vue-router";
import { Tag, tagsEffect } from "./index";
import { defineComponent, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NButton } from "naive-ui";
import { CloseSharp } from "@vicons/ionicons5";
export default defineComponent({
  name: "LayTag",
  inheritAttrs: false,
  components: {
    NButton,
    CloseSharp
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const tags: Array<Tag> = reactive([]);

    /**tags处理 */
    tagsEffect(tags, route, router);

    return {
      tags,
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
      }
    };
  }
});
</script>
<style lang="scss" scoped>
.lay-tag {
  height: 100%; /*48px*/
  padding: 0 10px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  background-color: #f5f7f9;
}
.tag-item {
  margin: 0 5px;
  font-size: 14px;
  background-color: #fff;
  .tag-btn {
    position: relative;
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
