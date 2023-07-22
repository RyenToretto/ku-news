<template>
    <view class="index-page">
        <view class="learn-jump-box learn-line">
            <navigator url="/pages/news/list" open-type="reLaunch">跳转到「新闻」</navigator>
        </view>
        
        <hr />

        <view class="learn-jump-box learn-line">
            <navigator url="/pages/learn/learn">跳转到「学习」</navigator>
        </view>

        <view class="learn-jump-box learn-line">
            <navigator url="/pages/regist/regist?payload=kjf">跳转到「注册」</navigator>
        </view>

        <view class="learn-jump-box learn-line">
            <navigator url="/pages/cats/cats">跳转到「猫猫」</navigator>
        </view>
        
        <view class="learn-line">
            <button @click="openDialogTestSome">打开对话框</button>
            <kt-dialog v-model="dialogTestSome"></kt-dialog>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                dialogTestSome: false
            }
        },
        methods: {
            openDialogTestSome() {
                this.dialogTestSome = true
            }
        }
    }
</script>

<style lang="scss">
.index-page {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .learn-line {
        box-sizing: border-box;
        margin-top: 16rpx;
    }
    .learn-jump-box {
        text-decoration: underline;
    }
}
</style>
