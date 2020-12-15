<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed"/>
      <MenuFoldOutlined v-else/>
    </a-button>
    <a-button @click="headerSelect" style="margin-left: 20px">阿萨德路附近了</a-button>
    <a-menu
        v-model:selected-keys="selectedKeys"
        v-model:open-keys="openKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <PieChartOutlined/>
            <span>{{ item.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key"/>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined
} from '@ant-design/icons-vue';
import {Menu} from 'ant-design-vue';

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  template: `
    <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
        <span>
          <MailOutlined/><span>{{ menuInfo.title }}</span>
        </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <PieChartOutlined/>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key"/>
      </template>
    </template>
    </a-sub-menu>
  `,
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  components: {
    'sub-menu': SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  },
  data() {
    return {
      collapsed: false,
      openKeys: ['2', '2.1'],
      selectedKeys: ['2.1.1'],
      list: [
        {
          key: '1',
          title: 'Option 1',
        },
        {
          key: 'a',
          title: 'Option a',
        },
        {
          key: 'b',
          title: 'Option b',
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                {key: '2.1.1', title: 'Option 2.1.1'},
                {key: '2.1.2', title: 'Option 2.1.2'}
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    headerSelect() {
      // this.openKeys = ['2', '2.1'];
      this.selectedKeys = this.selectedKeys[0] === '2.1.2' ? ['2.1.1'] : ['2.1.2'];
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
