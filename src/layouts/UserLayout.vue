<template>
    <div class="container">
        <div class="header">
            <div class="title">ok-admin</div>
            <div class="desc">一个很赞的响应式的后台管理模版</div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="link">
                <a href="#">帮助</a>
                <a href="#">隐私</a>
                <a href="#">条款</a>
            </div>
            <div class="copyright">
                Copyright © 2019 ok-admin-vue v3.0
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserLayout'
    };
</script>

<style scoped>
    .container {
        background: #f0f2f5 url("../assets/bg.svg") no-repeat 50%;
        background-size: 100%;
        position: absolute;
        width: 100%;
        min-height: 100%;
        padding: 110px 0 144px;
    }

    .container .header {
        text-align: center;
    }

    .container .header .title {
        font-size: 33px;
        color: rgba(0,0,0,.85);
        font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
        font-weight: 600;
    }
    
    .container .footer {
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
    }

    .container .footer .link {
        margin-bottom: 8px;
    }

    .container .footer .link a {
        margin-right: 40px;
        color: rgba(0,0,0,.45);
    }

    .container .footer .link a:last-child {
        margin-right: 0px;
    }
</style>
