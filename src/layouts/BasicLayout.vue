<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed" :trigger="null">
            <div class="logo"/>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1-1']" :defaultOpenKeys="['1']">
                <a-sub-menu key="1">
                    <span slot="title">
                        <a-icon type="dashboard"/>
                        <span>控制台</span>
                    </span>
                    <a-menu-item key="1-1" @click="() => $router.push('/dashboard/analysis')">分析页</a-menu-item>
                    <a-menu-item key="1-2" @click="() => $router.push('/dashboard/monitor')">监控页</a-menu-item>
                    <a-menu-item key="1-3" @click="() => $router.push('/dashboard/workplace')">工作台</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="3">
                    <span slot="title">
                        <a-icon type="user"/>
                        <span>会员管理</span>
                    </span>
                    <a-menu-item key="3-1">用户列表</a-menu-item>
                    <a-menu-item key="3-2">角色列表</a-menu-item>
                    <a-menu-item key="3-3">权限列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="4">
                    <span slot="title">
                        <a-icon type="compass"/>
                        <span>常用页面</span>
                    </span>
                    <a-menu-item key="4-1" @click="() => $router.push('/list/table-list')">文章列表</a-menu-item>
                    <a-menu-item key="4-2">项目列表</a-menu-item>
                    <a-menu-item key="4-3">应用列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="4">
                    <span slot="title">
                        <a-icon type="form"/>
                        <span>表单页面</span>
                    </span>
                    <a-menu-item key="4-1">基础表单</a-menu-item>
                    <a-menu-item key="4-2">分步表单</a-menu-item>
                    <a-menu-item key="4-3">高级表单</a-menu-item>
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
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                ok-admn v3.0 ©2019 Created by BoBi
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: 'BasicLayout',
        components: {
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
