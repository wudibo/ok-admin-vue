<template>
  <div class="box"> {{ hello }} </div>
  <div class="box-table">
    <AgGridVue
      style="height: 350px; width: 602px"
      rowSelection="multiple"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></AgGridVue>
  </div>
</template>
<script setup lang="ts">
  import { AgGridVue } from 'ag-grid-vue3'
  import { ref } from 'vue'
  const columnDefs = ref([
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ])
  const rowData = ref([
    { field: 'make', make: 'Toyota', model: 'Celica', price: 35000, sortable: true },
    { field: 'model', make: 'Ford', model: 'Mondeo', price: 32000, sortable: true },
    { field: 'price', make: 'Porsche', model: 'Boxter', price: 72000, sortable: true }
  ])
  const hello = ref('hello world')
</script>
<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
  .box-table {
    padding: 32px;
    display: flex;
    justify-content: center;
  }
</style>
