<template>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
    <a-col :xs="24" :sm="12" :md="12" :lg="6" class="padding-tb-5">
      <a-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #extra>
          <a-tag color="blue">日</a-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data">
          </div>

          <a-divider style="margin: 12px 0"/>
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="6" class="padding-tb-5">
      <a-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #extra>
          <a-tag color="green">周</a-tag>
        </template>
        <div class="card-cont">
          <div class="num">65,848</div>

          <div class="card-data"><div id="cardChart"></div></div>

          <a-divider style="margin: 12px 0"/>
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="6" class="padding-tb-5">
      <a-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #extra>
          <a-tag color="pink">日</a-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data">
          </div>

          <a-divider style="margin: 12px 0"/>
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="6" class="padding-tb-5">
      <a-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #extra>
          <a-tag color="orange">日</a-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data">
          </div>

          <a-divider style="margin: 12px 0"/>
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang='ts'>
import {onMounted} from 'vue'
import { Chart } from '@antv/g2';
const cardChartFun = () => {
  const data = [
    { year: 'Mon', value: 102 },
    { year: 'Tue', value: 161 },
    { year: 'Wed', value: 159 },
    { year: 'Thu', value: 174 },
    { year: 'Fri', value: 270 },
    { year: 'Sat', value: 260 },
    { year: 'Sun', value: 319 },
  ];
  const chart = new Chart({
    container: 'cardChart',
    autoFit: true,
    height: 35,

  });
  chart.data(data);
  chart.scale({
    value: {
      min: 100,
      nice: true,
    },
    year: {
      range: [0, 1],
    },
  });
  chart.tooltip({
    showCrosshairs: true,
    shared: true,
  });
  chart.axis(false);

  chart.area().position('year*value');
  chart.line().position('year*value');
  chart.theme({ "styleSheet": { "brandColor": "#9DF5CA", "paletteQualitative10": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"], "paletteQualitative20": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"] } });
  chart.render();
}

export default {
  name: 'Cards',
  setup() {
    onMounted(function (){
      cardChartFun();
    })
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.padding-tb-5{
  padding-top: 5px;
  padding-bottom: 5px;
}
.card-box{
  border-radius: 4px;
}
.card-cont{
  .num{
    font-size: 30px;
  }
  .card-data{
    height: 35px;
  }
  .card-footer{
    display: flex;
    justify-content: space-between;
  }
}
</style>
