<template>
    <view class="message-list-item" @click="click123">
        <view class="image"></view>
        <view class="right">
            <view class="name">{{ itemData.name }}</view>
            <view class="msg">{{ itemData.msg }}</view>
        </view>
    </view>
</template>

<script setup="props,context">
import './MessageListItem.scss'
const props = defineProps({
    itemData:{
        name:String,
        avatar:String,
        msg:String
    }
})
const itemData =props.itemData
const click123 = () => {
    console.log(123);
}

</script>