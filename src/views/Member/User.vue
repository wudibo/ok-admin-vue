<template>
    <div class="box">
        <!--面包屑导航-->
        <a-breadcrumb class="breadcrumb">
            <a-breadcrumb-item>会员管理</a-breadcrumb-item>
            <a-breadcrumb-item>用户列表</a-breadcrumb-item>
        </a-breadcrumb>
        <!--内容主体-->
        <div class="content">
            <!--模糊搜索-->
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
            <!--数据表格-->
            <a-table bordered size="small" :loading="loading" class="table" :columns="columns" :dataSource="data" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
                <!--性别-->
                <span slot="sex" slot-scope="sex">
                    <a-tag v-if="sex === 0" color="blue">男</a-tag>
                    <a-tag v-if="sex === 1" color="pink">女</a-tag>
                </span>
                <!--角色-->
                <span slot="roles" slot-scope="roles">
                    <a-tag v-for="role in roles" color="blue" :key="role">{{role}}</a-tag>
                </span>
                <!--状态-->
                <span slot="status" slot-scope="status">
                    <a-tag v-if="status === 0" color="green">正常</a-tag>
                    <a-tag v-if="status === 1" color="purple">冻结</a-tag>
                    <a-tag v-if="status === 2" color="orange">删除</a-tag>
                </span>
                <!--操作-->
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
        {title: '密码', dataIndex: 'password'},
        {title: '真实姓名', dataIndex: 'reallyName'},
        {title: '昵称', dataIndex: 'nickname'},
        {title: '邮箱', dataIndex: 'email'},
        {title: '性别', dataIndex: 'sex', scopedSlots: {customRender: 'sex'}},
        {title: '年龄', dataIndex: 'age'},
        {title: '状态', dataIndex: 'status', scopedSlots: {customRender: 'status'}},
        {title: '角色', dataIndex: 'roles', scopedSlots: {customRender: 'roles'}},
        {title: '创建时间', dataIndex: 'createTime'},
        {title: '操作', scopedSlots: {customRender: 'action'}, align: 'center'}
    ];

    export default {
        data() {
            return {
                data: [],
                columns,
                selectedRowKeys: [],
                loading: true
            };
        },
        mounted() {
            this.userList();
        },
        methods: {
            userList() {
                this.$axios({url: '/user/list', method: 'get', params: null}).then(response => {
                    this.data = response.data;
                    this.loading = false;
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                });
            },
            edit(record) {
                console.log(record);
            },
            del(key) {
                console.log(key);
            },
            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            }
        }
    };
</script>

<style scoped lang="less">
    .box {
        .breadcrumb {
            margin: 16px 0;
        }

        .content {
            padding: 5px;
            background: #fff;

            .table {
                margin-top: 10px;
            }
        }

        a {
            text-decoration: none;
        }
    }
</style>
