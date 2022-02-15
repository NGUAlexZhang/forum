<template>
  <el-form class="login-container" :model="form" ref="loginForm" :rules="rules">
    <div style="text-align: center">
      <h2>
        登陆 |
        <router-link to="/register">注册</router-link>
      </h2>
    </div>
    <el-form-item prop="username">
      <el-input v-model="form.username" type="text" placeholder="请输入用户名" autocomplete="false"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入请输入密码" autocomplete="false"></el-input>
    </el-form-item>
    <div class="login-button">
      <el-button type="primary" @click="submit" :loading="this.loading" round>登录</el-button>
    </div>
  </el-form>
</template>

<script>
//import {Message} from "element-ui";

import {Message} from "element-ui";

export default {
  name: "index",
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.form)
              .then(() => {
                Message.success('登陆成功')
                this.$router.replace('/')

              }, (error) => {
                Message.error(error)
              })
              .finally(() => {
                this.loading = false
              })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 350px;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  margin: 250px auto;
  padding: 0 35px 19px 35px;
  background: #fff;
  background-clip: padding-box;
  box-shadow: 20px 0 20px #cac6c6;
}

.login-button {
  text-align: center;
}

</style>