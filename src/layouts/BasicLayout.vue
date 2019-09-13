<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider v-model="collapsed" :trigger="null">
            <div class="logo"/>
            <Menu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon class="trigger" @click="collapsed = !collapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'"></a-icon>
                <Header/>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
                    <router-view/>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                <Footer/>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
    import Menu from './Menu';
    import Header from './Header';
    import Footer from './Footer';
    export default {
        name: 'BasicLayout',
        components: {
            Menu,
            Footer,
            Header
        },
        data() {
            return {
                collapsed: false
            };
        }
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
