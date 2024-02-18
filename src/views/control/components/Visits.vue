<template>
  <n-grid cols="l:8 xs:1" x-gap="12" y-gap="12" responsive="screen">
    <n-gi span="l:5 xs:6 s:4" class="padding-tb-5">
      <n-card title="数据统计" :bordered="false">
        <div id="visits"></div>
      </n-card>
    </n-gi>
    <n-gi span="l:3 xs:6 s:4" class="padding-tb-5">
      <n-card title="数据统计" :bordered="false">
        <div id="pie"></div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Chart } from '@antv/g2'
  const randomNum = (min = 500, max = 12000): number => {
    const num = Math.random() * (max - min) + min
    return parseInt(num + '')
  }
  const clearElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element !== null) {
      element.innerHTML = ''
    }
  }

  // 统计图
  const cardChartFun = (elementId: string) => {
    clearElement(elementId)
    const data = [
      { type: '一月', value: randomNum() },
      { type: '二月', value: randomNum() },
      { type: '三月', value: randomNum() },
      { type: '四月', value: randomNum() },
      { type: '五月', value: randomNum() },
      { type: '六月', value: randomNum() },
      { type: '七月', value: randomNum() },
      { type: '八月', value: randomNum() },
      { type: '九月', value: randomNum() },
      { type: '十月', value: randomNum() },
      { type: '十一月', value: randomNum() },
      { type: '十二月', value: randomNum() }
    ]
    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 260
    })

    chart.options({
      type: 'interval',
      data: data,
      encode: {
        x: 'type',
        y: 'value'
      },
      axis: {
        y: { title: false },
        x: { title: false }
      }
    })
    chart.render()
  }

  // 圆饼图
  const pieChartFun = (elementId: string) => {
    clearElement(elementId)
    const data = [
      { genre: '事例一', sold: randomNum() },
      { genre: '事例二', sold: randomNum() },
      { genre: '事例三', sold: randomNum() },
      { genre: '事例四', sold: randomNum() },
      { genre: '事例五', sold: randomNum() }
    ]

    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 260
    })

    chart.coordinate({ type: 'theta' })
    chart
      .interval()
      .data(data)
      .transform({ type: 'stackY' })
      .encode('color', 'genre')
      .encode('y', 'sold')
      .animate('enter', { type: 'waveIn', duration: 500 })
    chart.render()
  }

  onMounted(function () {
    cardChartFun('visits')
    pieChartFun('pie')
  })
</script>

<style lang="scss" scoped></style>
