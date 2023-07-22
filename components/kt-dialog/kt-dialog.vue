<template>
    <view class="kt-dialog" :class="{ hidden: !visible }">
        <view v-if="visible" class="kt-dialog-box">
            <view class="kt-dialog-header">
                <view class="kt-dialog-title"><text>测试对话框</text></view>
            </view>
            <view class="kt-dialog-body">
                <text>{{ visible }}</text>
            </view>
            <view class="kt-dialog-footer">
                <view class="kt-dialog-ctl">
                    <button size="mini" @click="closeKtDialog">关闭</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name:"kt-dialog",
        model: {
            prop: 'visible',
            event: 'change'
        },
        props: {
            visible: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        methods: {
            closeKtDialog() {
                this.$emit('change', false)
            }
        }
    }
</script>

<style lang="scss">
    .kt-dialog {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        transition: background-color 0.3s linear;
        &.hidden {
            width: 0;
            height: 0;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0);
        }
    }
    .kt-dialog-box {
        box-sizing: border-box;
        padding: 5rpx;
        width: 70vw;
        border-radius: 5rpx;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        font-size: 0;
        .kt-dialog-header {
            box-sizing: border-box;
            padding: 5rpx;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            .kt-dialog-title {
                font-size: 16px;
            }
        }
        .kt-dialog-body {
            box-sizing: border-box;
            padding: 16px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            font-size: 16px;
        }
        .kt-dialog-footer {
            box-sizing: border-box;
            padding: 5rpx;
            width: 100%;
            border-radius: 5rpx;
            background-color: #f3f3f3;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
</style>