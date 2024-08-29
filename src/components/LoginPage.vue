<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>Login</h2>
      <el-form ref="loginForm" :model="form" status-icon :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     // 假设登录成功，跳转到另一个页面
      //     this.$router.push('/search');
      //   } else {
      //     console.log('错误提交!');
      //     return false;
      //   }
      // });
      this.$router.push('/search');
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-image: url('path/to/your/background-image.jpg'); 使用您提供的背景图像 */
  background-size: cover;
  background-position: center;
}
.login-card {
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* 半透明背景 */
  border-radius: 8px;
}
</style>
