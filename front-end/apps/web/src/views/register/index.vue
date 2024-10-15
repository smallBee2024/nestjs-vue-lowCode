<template>
  <div class="register-container">
    <h2>注册页面</h2>
    <a-form
      :model="formState"
      name="basic"
      class="register-form"
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

      <a-form-item
        label="确认密码"
        name="repeatpass"
        :rules="[{ required: true, message: 'Please input your repeatpass!' }]"
      >
        <a-input-password v-model:value="formState.repeatpass" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" block>注册</a-button>
      </a-form-item>
    </a-form>
    <div class="login-wrapper">
      已有账号/<router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { register } from '@/apis/common';

interface FormState {
  name: string;
  password: string;
  repeatpass: string;
}

const formState = reactive<FormState>({
  name: '',
  password: '',
  repeatpass: '',
});

const router = useRouter()

const onFinish = async () => {
  const res = await register({
    name: formState.name,
    password: formState.password,
    repeatpass: formState.repeatpass,
  })
  if (res.code === 200) {
    message.success(res.message)
    router.push('/login')
  } else {
    message.error(res.message)
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style lang='less' scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eee;
}
.register-form {
  width: 400px;
}
</style>
