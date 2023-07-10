<template>
  <view>
    <Input type="text" placeholder='请输入手机号' :value="phone" @change="handlePhoneChange" />
    <Input type="text" placeholder='请输入密码' :value="password" @change="handlePassowrdChange" />
    <Button @tap="onSubmit"> 登录 </button>
  </view>
</template>

<script setup>
import md5 from 'md5'
import './login.scss'
import { ref } from 'vue';
import { login as loginApi } from '../../api/login'
import {loginIM} from '../../utils/loginIM';

const phone = ref('13711174310')
const password = ref('lan7229221')

/**
 * 17307050231
 * qq123123
 *
 */

const handlePhoneChange = (value) => {
  phone.value = value
}

const handlePassowrdChange = (value) => {
  password.value = value
}

const onSubmit = () => {
  loginApi({
    phoneNumber: phone.value,
    areaCode: "86",
    password: md5(password.value),
    platform: 5,
    operationID: Date.now() + ""
  }).then(res => {
    console.log('res');
    console.log(res);
    if(res.errCode === 0 && res.data){
      //loginIM({userID:res.data.userID,token:res.data.imToken})
      loginIM({userID:res.data.userID,token:res.data.token})
    }
  }, err => {
    console.log(err);
  })
}

</script>
