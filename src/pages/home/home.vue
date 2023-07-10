<template>
  <view class="index">
    <MessageListItem v-for="(item, index) in list" :key="index" :itemData="item" />
  </view>
</template>

<script setup>
import openIM from '../../utils/im.js'
import { onMounted, onUnmounted } from 'vue'
import { useDidShow, useDidHide } from '@tarojs/taro'
import MessageListItem from '../../components/MessageListItem/MessageListItem.vue'
import './home.scss'

const list = [
  { avatar: '', name: '章三1', msg: '这是一条消息' },
  { avatar: '', name: '章三2', msg: '这是一条消息' },
  { avatar: '', name: '章三3', msg: '这是一条消息' },
]

onMounted(() => {
  getGroupList()
})
useDidShow(()=>{
  console.log('show');
})

const getGroupList = () => {
  console.log(123321321);
  openIM.getJoinedGroupList().then(({ data })=>{
    console.log(data);
}).catch(err=>{
  console.log(err);
})
}
</script>
