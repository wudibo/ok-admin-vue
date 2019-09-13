<template>
    <div>TableList</div>
</template>

<script>
    export default {
        name: 'TableList',
        mounted() {
            this.userList();
        },
        methods: {
            userList() {
                console.log('userList');
            }
        }
    };
</script>

<style scoped>

</style>
