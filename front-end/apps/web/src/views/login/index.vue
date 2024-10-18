<template>
  <div class="login-container">
    <h2>登录页面</h2>
    <a-form
      :model="formState"
      name="basic"
      class="login-form"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="账号"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" block>登录</a-button>
      </a-form-item>
    </a-form>
    <div class="register-wrapper">
      暂无账号/<router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { login } from '@/apis/common'

interface FormState {
  name: string
  password: string
}

const formState = reactive<FormState>({
  name: '',
  password: '',
});

const router = useRouter()

const onFinish = async () => {
  const res = await login({
    name: formState.name,
    password: formState.password,
  })
  if (res.success === true) {
    localStorage.setItem('token', res.data.token)
    router.push('/')
  } else {
    console.error(res.message);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang='less' scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eee;
  // h3 {
  //   width: 400px;
  //   text-align: center;
  // }
}
.login-form {
  width: 400px;
}
</style>
