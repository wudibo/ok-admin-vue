<template>
    <div class="box">
        <a-dropdown>
            <span>
                <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
                bobi <a-icon type="down"/>
            </span>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;"><a-icon type="user"/> 个人中心</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;"><a-icon type="setting"/> 个人设置</a>
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item>
                    <a href="javascript:;"><a-icon type="logout"/> 退出登陆</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style scoped lang="less">
    .box {
        float: right;
        margin-right: 16px;

        img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 3px;
        }

        span {
            cursor: pointer;
        }
    }
</style>
