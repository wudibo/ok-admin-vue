<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed" :trigger="null">
            <div class="logo"/>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1-1']" :defaultOpenKeys="['1']">
                <a-sub-menu key="1">
                    <span slot="title">
                        <a-icon type="dashboard"/>
                        <span>Dashboard</span>
                    </span>
                    <a-menu-item key="1-1">分析页</a-menu-item>
                    <a-menu-item key="1-2">监控页</a-menu-item>
                    <a-menu-item key="1-3">工作台</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="2">
                    <span slot="title">
                        <a-icon type="form"/>
                        <span>表单页</span>
                    </span>
                    <a-menu-item key="2-1">基础表单</a-menu-item>
                    <a-menu-item key="2-2">分步表单</a-menu-item>
                    <a-menu-item key="2-3">高级表单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="3">
                    <span slot="title">
                        <a-icon type="table"/>
                        <span>列表页</span>
                    </span>
                    <a-menu-item key="3-1">查询表格</a-menu-item>
                    <a-menu-item key="3-2">标准表格</a-menu-item>
                    <a-menu-item key="3-3">卡片表格</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon class="trigger" @click="collapsed = !collapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'"></a-icon>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    Bill is a cat.
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
    // import SideMenu from './SideMenu';
    // import Header from './Header';
    // import Footer from './Footer';

    export default {
        name: 'BasicLayout',
        components: {
            // SideMenu,
            // Header,
            // Footer
        },
        data() {
            return {
                collapsed: false,
            };
        },
    };
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .trigger {
        padding: 0 20px;
        line-height: 64px;
        font-size: 20px;
    }
</style>
