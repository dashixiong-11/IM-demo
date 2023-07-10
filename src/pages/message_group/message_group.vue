<template>
  <view class="message_group">
    <view class="message_window">
      <MessageBar v-for="(item,index) in messageList" :barData="item" :key="index"  />
    </view>
    <view class="input_window">
      <Input type="text" class="message_input" confirmType="发送" @onInput="handleMessageChange" @onConfirm="onSubmit"  />
    </view>
  </view>
</template>

<script setup>
import { ref,reactive } from 'vue'
import  MessageBar from '../../components/MessageBar/MessageBar.vue'
import './message_group.scss'
// 消息列表
const messageList = reactive([
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'me'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'me'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
  {type:'text',content:'你好',time:'2021-10-10 10:10:10',from:'other'},
])
const msg = ref('')
const handleMessageChange = (e) => {
  msg.value = e.detail.value
}
const onSubmit = ()=>{
  messageList.push({type:'text',content:msg.value,time:'2021-10-10 10:10:10',from:'me'})
}
</script>
