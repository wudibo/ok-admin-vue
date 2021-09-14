<template>
  <div class="app-container">
    <div class="form"></div>
    <div class="table">
      <NDataTable :columns="columns" :data="data" :pagination="pagination">
        
      </NDataTable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
import { NDataTable, NTag } from 'naive-ui'
const pagination = {
  pageSize: 10
}
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' },
  {
    title: 'tags',
    key: '标签',
    render (row: any) {
        const tags = row.tags.map((tagKey: string) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info'
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
  }
]
const data = ref([
  {
    id: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    id: 2,
    name: '尤雨溪',
    age: 30,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }
])


</script>
<style lang="scss" scoped>
.box {
  color: #60d659;
}
</style>
