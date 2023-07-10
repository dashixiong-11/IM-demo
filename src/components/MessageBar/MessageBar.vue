<template>
  <view class="message-bar" @click="click123">
    <view class="image"></view>
    <view class="right">
      <view class="msg">{{ barData.content }}</view>
    </view>
  </view>
</template>

<script setup="props,context">
import './MessageBar.scss'
const props = defineProps({
  barData: {
    form: String,
    avatar: String,
    content: String,
    time: String
  }
})
const barData = props.barData
const click123 = () => {
  console.log(123);
}

</script>
