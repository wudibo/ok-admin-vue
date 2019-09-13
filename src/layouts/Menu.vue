<template>
    <a-menu theme="dark" mode="inline" :openKeys="openKeys" :defaultSelectedKeys="defaultSelectedKeys" @openChange="onOpenChange">
        <a-sub-menu key="dashboard">
            <span slot="title">
                <a-icon type="dashboard"/>
                <span>控制台</span>
            </span>
            <a-menu-item key="/dashboard/analysis">
                <router-link to="/dashboard/analysis">分析页</router-link>
            </a-menu-item>
            <a-menu-item key="/dashboard/monitor">
                <router-link to="/dashboard/monitor">监控页</router-link>
            </a-menu-item>
            <a-menu-item key="/dashboard/workplace">
                <router-link to="/dashboard/workplace">工作台</router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="member">
            <span slot="title">
                <a-icon type="user"/>
                <span>会员管理</span>
            </span>
            <a-menu-item key="/member/user">
                <router-link to="/member/user">用户列表</router-link>
            </a-menu-item>
            <a-menu-item key="/member/role">
                <router-link to="/member/role">角色列表</router-link>
            </a-menu-item>
            <a-menu-item key="/member/permission">
                <router-link to="/member/permission">权限列表</router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="often">
            <span slot="title">
                <a-icon type="compass"/>
                <span>常用页面</span>
            </span>
            <a-menu-item key="/often/article">
                <router-link to="/often/article">文章列表</router-link>
            </a-menu-item>
            <a-menu-item key="/often/project">
                <router-link to="/often/project">项目列表</router-link>
            </a-menu-item>
            <a-menu-item key="/often/app">
                <router-link to="/often/app">应用列表</router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="form">
            <span slot="title">
                <a-icon type="form"/>
                <span>表单页面</span>
            </span>
            <a-menu-item key="4-1">基础表单</a-menu-item>
            <a-menu-item key="4-2">分步表单</a-menu-item>
            <a-menu-item key="4-3">高级表单</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                rootSubmenuKeys: ['dashboard', 'member', 'often', 'form'],
                openKeys: [this.$route.path.substring(1, this.$route.path.lastIndexOf('/'))],
                defaultSelectedKeys: [this.$route.path]
            };
        },
        methods: {
            onOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            }
        }
    };
</script>

<style scoped>

</style>
