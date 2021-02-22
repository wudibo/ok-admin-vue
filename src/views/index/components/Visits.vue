<template>
  <a-card class="border-radius" :bordered="false">
    <template #title>访问量</template>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24 }">
      <a-col :xs="24" :sm="16" :md="16" :lg="16" class="padding-tb-5">
        <div id="visits"></div>
      </a-col>
      <!-- <a-col :xs="24" :sm="12" :md="12" :lg="6" class="padding-tb-5">
        <div id="visits"></div>
      </a-col> -->
    </a-row>
  </a-card>
</template>

<script lang='ts'>
// originData
import {onMounted} from "vue";
import {Chart, DIRECTION} from "@antv/g2";
import {randomNum} from '@/utils/index';

const clearElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element !== null) {
    element.innerHTML = "";
  }
};

const cardChartFun = () => {
  const elementId = "visits";
  clearElement(elementId);
  const data = [
    {type: "一月", value: randomNum()},
    {type: "二月", value: randomNum()},
    {type: "三月", value: randomNum()},
    {type: "四月", value: randomNum()},
    {type: "五月", value: randomNum()},
    {type: "六月", value: randomNum()},
    {type: "七月", value: randomNum()},
    {type: "八月", value: randomNum()},
    {type: "九月", value: randomNum()},
    {type: "十月", value: randomNum()},
    {type: "十一月", value: randomNum()},
    {type: "十二月", value: randomNum()},
  ];
  const chart = new Chart({
    container: elementId,
    autoFit: true,
    height: 260,
  });
  chart.data(data);
  chart.scale("value", {
    nice: true,
  });
  chart.axis("type", {
    tickLine: null,
  });

  chart.tooltip({
    showMarkers: false,
  });
  chart.interaction("element-active");
  chart.coordinate({});
  chart.legend(false);
  chart.interval()
      .style('', () => { /**设置图表样式 */
        return {
          fill: 'l(270) 0:#1596EC 0.5:#3DB3F7 1:#69CDFF', //填充色为渐变色(l代表线性渐变)
        }
      })
      .position("type*value");

  chart.render();
};
export default {
  setup() {
    onMounted(function () {
      cardChartFun();
    });
    return {};
  },
};
</script>

<style lang="less" scoped>
.border-radius{
  border-radius: 4px;
}
</style>
