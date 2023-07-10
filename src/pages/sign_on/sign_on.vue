<template>
  <view class="sign_on">
    <AtForm>
      <AtInput name='value' title='手机号' type='number' placeholder='请输入手机号' :value="phone" @change="handlePhoneChange" />
      <AtInput name='value' title='验证码' type='number' placeholder='请输入验证码' :value="code" @change="handleCodeChange" />
      <AtButton formType='submit' @click="onSendCode">发送验证码</AtButton>
      <AtButton formType='submit' @click="onSubmit">注册</AtButton>
    </AtForm>
  </view>
</template>

<script setup>
import './sign_on.scss'
import { sendCode, verify } from '../../api/account'
import { AtForm, AtInput, AtButton } from 'taro-ui-vue3'
import { ref } from 'vue'
const phone = ref('')
const code = ref('')

const handlePhoneChange = (value) => {
  phone.value = value
}
const handleCodeChange = (value) => {
  code.value = value
}
const onSendCode = () => {
  if (!phone.value) {
    return
  }
  sendCode({ phoneNumber: phone.value }).then(res => {
    console.log(res);
  }, err => {
    console.log(err);
  })
}
const onSubmit = () => {
  verify({
    phoneNumber: phone.value,
    verificationCode: code.value
  }).then(res => {
    if (res.errCode === 0) {
      Taro.switchTab({
        url: '/login/login'
      })
    }
    console.log(res);
  }, err => {
    console.log(err);
  })
}


</script>
