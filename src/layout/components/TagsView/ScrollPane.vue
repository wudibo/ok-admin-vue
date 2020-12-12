<template>
  <div class="scroll-container">
    <div ref="scroll_cont" class="scroll-content">
      <slot/>
    </div>
    <div ref="scrollbar" class="scrollbar__bar is-horizontal">
      <div @mousedown="headerMousemove($event)"
           class="scrollbar__thumb" :style="{'width': scroll_info.width, left: scroll_info.x}"></div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, onMounted, getCurrentInstance} from 'vue'

export default {
  name: 'ScrollPane',
  setup(props) {
    const {ctx} = getCurrentInstance();
    const left = ref(0);
    const scrollbar = ref(null);
    const scroll_cont = ref(null);
    let scroll_info = reactive({
      x: 0,
      y: 0,
      diff: 0,
      width: '0%',
      showWidth: 0,
      scrollWidth: 0,
    })
    onMounted(function () {
      ctx.elementScroll(scroll_cont.value, function (info) {
        let diff = (100 / (info.scrollWidth / (info.showWidth))).toFixed(4)
        for (let key in info) {
          scroll_info[key] = info[key];
        }
        scroll_info.diff = diff * 1;
        scroll_info.width = diff + "%";
        console.log(scroll_info);
      })
    });

    return {
      left,
      scroll_info,
      scrollbar,
      scroll_cont
    }
  },
  methods: {
    headerMousemove(e) {
      let self = this,
          element = e.target,
          isListen = true;
      let x = e.x;
      element.onmousemove = function (ev) {
        if (!isListen) return;
        let e = ev || window.event;
        let moveDist = e.x - x; //移动距离
        let left = (element.style.left.replace(/px/i, "")) * 1;
        if(moveDist <= 0 && left <= 0){
          element.style.left = 0;
          self.scroll_cont.scrollLeft = 0;
        } else {
          // todo
          x = e.x;
          self.scroll_cont.scrollLeft = self.scroll_cont.scrollLeft + (moveDist * self.scroll_info.scrollWidth / self.scroll_info.showWidth);//self.scroll_info.diff);
          element.style.left = left + moveDist + "px";
        }
      }
      element.onmouseout = function () {
        isListen = false;
      }
      /*element.onmouseup = function () {
        isListen = false;
      }*/
    },
    elementScroll(element, cb) {
      setTimeout(function () {
        cb({
          y: element.scrollTop,
          x: element.scrollLeft,
          showWidth: element.clientWidth + 40,
          scrollWidth: element.scrollWidth
        })
      }, 50);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable";

.scroll-container {
  width: 100%;
  height: 48px;
  padding: 0 20px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  background: @content-bg;

  .scroll-content {
    height: 68px;
    line-height: 48px;
    overflow-x: auto;
  }

  &:hover .scrollbar__bar,
  &:active .scrollbar__bar,
  &:focus .scrollbar__bar {
    opacity: 1;
    transition: opacity 340ms ease-out;

    .scrollbar__thumb {
      height: 6px;
    }
  }

  .scrollbar__bar {
    position: absolute;
    height: 6px;
    left: 2px;
    right: 2px;
    bottom: 0;

    .scrollbar__thumb {
      transition: 0.3s background-color;
      width: 0;
      height: 0;
      border-radius: 4px;
      position: relative;
      left: 0;
      display: block;
      cursor: pointer;
      background-color: rgba(144, 147, 153, 0.3);

      &:hover {
        background-color: rgba(144, 147, 153, 0.5);
      }
    }
  }
}
</style>
