<template>
  <view class="index">
    <button class="login-button" @tap="login111">微信一键登录</button>
  </view>
</template>

<script setup>
import md5 from 'md5'
import './login.scss'
import { login as loginApi } from '../../api/login'
import {loginIM} from '../../utils/loginIM';

const login111 = () => {
  loginApi({
    phoneNumber: "17307050231",
    areaCode: "86",
    password: md5('qq123123'),
    platform: 5,
    operationID: Date.now() + ""
  }).then(res => {
    if(res.errCode === 0 && res.data){
      // uni.setStorageSync('chatToken', res.data.chatToken)
      // uni.setStorageSync('imToken', res.data.imToken)
      // uni.setStorageSync('userId', res.data.userID)
      loginIM({userID:res.data.userID,token:res.data.imToken})
      // uni.reLaunch({
      //   url: '/pages/home/home'
      // })
    }
    console.log(res);
  }, err => {
    console.log(err);
  })
}

</script>
