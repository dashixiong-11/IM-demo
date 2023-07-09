<template>
  <view class="index">
    <MessageListItem v-for="(item, index) in list" :key="index" :itemData="item" />
  </view>
</template>

<script>
import { onMounted } from 'vue'
import MessageListItem from '../../components/MessageListItem/MessageListItem.vue'
import './home.scss'

export default {
  setup() {
    const list = [
      { avatar: '', name: '章三1', msg: '这是一条消息' },
      { avatar: '', name: '章三2', msg: '这是一条消息' },
      { avatar: '', name: '章三3', msg: '这是一条消息' },
    ]

    return {
      list
    };
  },
  components: { MessageListItem }
}
</script>
