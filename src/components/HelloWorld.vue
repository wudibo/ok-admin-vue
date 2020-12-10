<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <a-button type="primary">
    按钮
  </a-button>

  <a-form
      name="custom-validation"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed">
    <a-form-item required has-feedback label="Password" name="pass">
      <a-input v-model:value="ruleForm.pass" type="password" autocomplete="off"/>
    </a-form-item>
    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input v-model:value="ruleForm.checkPass" type="password" autocomplete="off"/>
    </a-form-item>
    <a-form-item has-feedback label="Age" name="age">
      <a-input-number v-model:value="ruleForm.age"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm">
        Reset
      </a-button>
    </a-form-item>
  </a-form>

</template>

<script type="application/javascript">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    let checkAge = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject('Please input the age');
      }
      if (!Number.isInteger(value)) {
        return Promise.reject('Please input digits');
      } else {
        if (value < 18) {
          return Promise.reject('Age must be greater than 18');
        } else {
          return Promise.resolve();
        }
      }
    };
    let validatePass = async (rule, value) => {
      if (value === '') {
        return Promise.reject('Please input the password');
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        return Promise.resolve();
      }
    };
    let validatePass2 = async (rule, value, callback) => {
      if (value === '') {
        return Promise.reject('Please input the password again');
      } else if (value !== this.ruleForm.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      count: 0
    }
  },
  methods: {
    handleFinish(values) {
      console.log(values);
    },
    handleFinishFailed(errors) {
      console.log(errors);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  }
}
</script>
