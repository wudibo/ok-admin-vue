<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <!--侧边栏-->
        <a-layout-sider v-model="collapsed" :trigger="null">
            <div class="logo"/>
            <Menu/>
        </a-layout-sider>
        <a-layout>
            <!--顶部布局-->
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon class="trigger" @click="collapsed = !collapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'"></a-icon>
                <Header/>
            </a-layout-header>
            <!--内容部分-->
            <a-layout-content style="margin: 0 16px">
                <router-view/>
            </a-layout-content>
            <!--底部布局-->
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
