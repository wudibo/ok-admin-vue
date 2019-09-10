<template>
    <div class="main">
        <a-form class="login-form" :form="form" @submit="handleSubmit">
            <a-form-item>
                <a-input v-decorator="['userName', { rules: [{ required: true, message: '请输入账号！' }] }]" placeholder="账号">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="[ 'password', { rules: [{ required: true, message: '请输入密码！' }] }]" type="password" placeholder="密码">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-decorator="['remember', {valuePropName: 'checked', initialValue: true, }]">
                    记住我
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    忘记密码
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    登 录
                </a-button>
                或者 <a href="">注册</a>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
            },
        },
    };
</script>

<style scoped lang="less">
    .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
        margin-top: 50px;
        .login-form {
            .login-form-forgot {
                float: right;
            }
            .login-form-button {
                width: 100%;
            }
        }
    }
</style>
