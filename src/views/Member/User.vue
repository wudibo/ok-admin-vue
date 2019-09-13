<template>
    <div>
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>会员管理</a-breadcrumb-item>
            <a-breadcrumb-item>用户列表</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
            <a-form layout="inline">
                <a-form-item>
                    <a-input placeholder="账号">
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input placeholder="邮箱">
                        <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit">
                        搜索
                    </a-button>
                </a-form-item>
            </a-form>
            <a-table :columns="columns" :dataSource="data" bordered size="small" style="margin-top: 10px">
            <span slot="roles" slot-scope="roles">
                <a-tag v-for="role in roles" color="blue" :key="role">{{role}}</a-tag>
            </span>
                <span slot="action" slot-scope="record">
                <a href="javascript:;" @click="edit(record)">编辑</a>
                <a-divider type="vertical"/>
                <a href="javascript:;" @click="del(record.key)">删除</a>
            </span>
            </a-table>
        </div>
    </div>
</template>
<script>
    const columns = [
        {title: '账号', dataIndex: 'username'},
        {title: '年龄', dataIndex: 'age'},
        {title: '邮箱', dataIndex: 'email'},
        {title: '角色', dataIndex: 'roles', scopedSlots: {customRender: 'roles'}},
        {title: '操作', scopedSlots: {customRender: 'action'}}
    ];

    const data = [
        {key: '1', username: 'zhangsan ', age: 32, email: 'zhangsan@qq.com', roles: ['ADMIN', 'TEACHER']},
        {key: '2', username: 'lisi', age: 42, email: 'lisi@qq.com', roles: ['STUDENT']},
        {key: '3', username: 'wangwu', age: 32, email: 'wangwu@qq.com', roles: ['GUEST']}
    ];

    export default {
        data() {
            return {
                data,
                columns,
            };
        },
        methods: {
            edit(record) {
                console.log(record);
            },
            del(key) {
                console.log(key);
            }
        }
    };
</script>

<style scoped lang="less">
    a {
        text-decoration: none;
    }
</style>
