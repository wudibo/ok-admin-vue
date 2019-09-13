<template>
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
        <a-sub-menu key="5">
            <span slot="title">
                <a-icon type="form"/>
                <span>表单页面</span>
            </span>
            <a-menu-item key="5-1">基础表单</a-menu-item>
            <a-menu-item key="5-2">分步表单</a-menu-item>
            <a-menu-item key="5-3">高级表单</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script>
    export default {
        name: 'Menu'
    };
</script>

<style scoped>

</style>
