<template>
  <div class="padding-sm padding-bottom-xs">
    <div class="box-shadow padding-sm">
      <div class="padding-bottom-sm text-f16">总共有{{ iconfont.glyphs.length }}个字体图标</div>
      <a-button-group>
        <a-button @click="isLineIcon = true" :type="isLineIcon?'primary':''">线性图标({{ iconArr.line.length }})</a-button>
        <a-button @click="isLineIcon = false" :type="isLineIcon?'':'primary'">实体图标({{ iconArr.fill.length }})</a-button>
      </a-button-group>
    </div>
  </div>

  <div class="padding-lr-sm">
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 24}">
      <a-col v-for="item in iconArr[isLineIcon?'line':'fill']" class="padding-tb-xs" :key='item.icon_id' :xs="12"
             :sm="12" :md="6"
             :lg="3">
        <div @click="handleCopy(item)" class="box-shadow font-cont padding-top-sm padding-bottom-5">
          <ok-icon class="icon" :type="iconfont.font_family + item.font_class"></ok-icon>
          <div class="font-name ellip2">{{ iconfont.font_family + item.font_class }}</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang='ts'>
import {onMounted, ref, reactive} from 'vue';
import {message} from 'ant-design-vue';
import copy from 'copy-to-clipboard';
//watchEffect
// eslint-disable-next-line @typescript-eslint/no-var-requires
const iconfont = require("@/assets/font/iconfont.json");
export default {
  setup() {
    const isLineIcon = ref(true);
    const iconArr = reactive({
      'line': [] as any,
      'fill': [] as any
    });
    iconfont.glyphs.forEach((item: any) => {
      if (item.font_class.indexOf("fill") >= 0) {
        iconArr.fill.push(item);
      } else {
        iconArr.line.push(item);
      }
    });

    onMounted(() => {
      console.log('mounted!')
    });

    const methods = {
      handleCopy(item: any) {
        const ok_icon = `<ok-icon type="${iconfont.font_family + item.font_class}"></ok-icon>`;
        copy(ok_icon) ? message.success('已复制：' + ok_icon) : message.error('复制失败');
      }
    }

    return {
      iconArr,
      isLineIcon,
      iconfont,
      ...methods
    }
  }
}
</script>

<style lang="less" scoped>
.font-cont {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 36px;

  &:hover {
    background: @main-color;
    color: white;

    .icon {
      transform: scale(1.5);
    }
  }

  .icon {
    transition: transform .5s;
  }

  .font-name {
    box-sizing: content-box;
    font-size: 12px;
    padding-top: 20px;
    height: 36px;
    text-align: center;
  }
}
</style>
