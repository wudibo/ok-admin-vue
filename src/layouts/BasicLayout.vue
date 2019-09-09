<template>
    <div>
        <div>BasicLayout-left</div>
        <div>
            <div>BasicLayout-top</div>
            <router-view></router-view>
            <div>BasicLayout-footer</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BasicLayout'
    };
</script>

<style scoped>

</style>
