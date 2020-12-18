<template>
  <div class="ok-scroll">
    <div class="scroll-cont" ref="scrollCont">
      <slot></slot>
    </div>
    <div class="scrollbar-box"
         :class="isMouse?'show':''"
         @mousedown="handleMouseDown">
      <div class="scrollbar"
           ref="scrollbar"
           :style="{width: scrollbarInfo.activeWidth + 'px', left: moveLeft + 'px'}">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref, reactive} from 'vue'

const scrollbar = ref();  //滚动条
const scrollCont = ref(); //内容区域
const moveLeft = ref(0);
const isMouse = ref(false);//鼠标左键是否处于按下状态

/**滚动条信息*/
const scrollbarInfo = reactive({
  scrollWidth: 0, //内容总宽度
  offsetWidth: 0, //可视区域容总宽度
  activeWidth: 0, //活动滚动条的宽度
  ratio: 0, //活动滚动条宽度的百分比
});

const headerScrollRatio = () => {
  const {scrollWidth, offsetWidth} = scrollCont.value;
  const ratio = scrollWidth / offsetWidth;
  scrollbarInfo['ratio'] = parseFloat((100 / ratio).toFixed(3));
  scrollbarInfo['scrollWidth'] = scrollWidth;
  scrollbarInfo['offsetWidth'] = offsetWidth;
  scrollbarInfo['activeWidth'] = offsetWidth / (ratio < 1 ? 1 : ratio);
};

/**鼠标移动的处理 为负数代表向左边移动*/
const headerMouseMove = (moveDistance: number) => {
  const leftMax = scrollbarInfo.offsetWidth - scrollbarInfo.activeWidth;
  const styleLeft: string = scrollbar.value.style.left + '';
  let left: number = styleLeft ? Number(styleLeft.replace(/px/ig, '')) : 0;
  left *= 1;
  if (left + moveDistance <= 0) {
    moveLeft.value = 0;
  } else if (left + moveDistance >= leftMax) {
    moveLeft.value = leftMax;
  } else {
    moveLeft.value = (left + moveDistance);
  }

  // 移动内容区域 由于使用的是原生的滚动模式所以不用担心超出问题
  scrollCont.value.scrollLeft = scrollCont.value.scrollLeft + (scrollbarInfo.scrollWidth / scrollbarInfo.offsetWidth * moveDistance);
}

/**鼠标按下*/
const handleMouseDown = function (e: MouseEvent) {
  console.log('handleMouseDown');
  if (e.target === scrollbar.value) {
    isMouse.value = true;
  } else {
    // todo
    const styleLeft: string = scrollbar.value.style.left + '';
    let left: number = styleLeft ? Number(styleLeft.replace(/px/ig, '')) : 0;
    left *= 1;
    headerMouseMove(e.offsetX - left);
  }
}

/**鼠标移动*/
const handleMouseMove = function (e: MouseEvent) {
  if (isMouse.value) {
    headerMouseMove(e.movementX);
  }
}

/**鼠标按键释放*/
const handleMouseUp = function () {
  isMouse.value = false;
}

export default {
  name: "OkScroll",
  setup() {
    onMounted(function () {
      setTimeout(headerScrollRatio, 200);
      window.onresize = function(){
        headerScrollRatio();
      };
    });

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp);

    return {
      moveLeft,
      isMouse,
      scrollCont,
      scrollbar,
      scrollbarInfo, //活动滚动条宽度
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
    }
  },
}
</script>

<style lang="less" scoped>
// 滚动条宽度
@scrollbar-height: 6px;

.ok-scroll {
  width: 100%;
  height: 100%;
  user-select: none;
  //overflow-x: scroll;
  overflow: hidden;
  position: relative;

  .scroll-cont {
    width: 100%;
    overflow-y: hidden;
    position: relative;
    white-space: nowrap;
  }

  &:hover .scrollbar {
    background-color: rgba(0, 0, 0, .2);
  }
  &:hover .scrollbar-box{
    opacity: 1;
  }

  .scrollbar-box {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    bottom: 0;
    z-index: 9;
    width: 100%;
    background-color: rgba(0, 0, 0, .05);
    height: @scrollbar-height;
    border-radius: @scrollbar-height / 2;

    &:hover .scrollbar {
      background-color: rgba(0, 0, 0, .35);
    }
    &.show{
      opacity: 1;
      .scrollbar{
        background-color: rgba(0, 0, 0, .35);
      }
    }
    .scrollbar {
      cursor: pointer;
      position: relative;
      height: @scrollbar-height;
      border-radius: @scrollbar-height / 2;
    }
  }
}
</style>
