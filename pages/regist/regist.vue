<template>
    <view class="regist-page">
        <form @submit="handleRegist" @reset="handleReset">
            <view class="regist-form-line">
                <input type="text" name="username" />
            </view>

            <view class="regist-form-line">
                <textarea name="content" ></textarea>
            </view>

            <view class="regist-form-line">
                <radio-group name="gender">
                    <radio value="1">男</radio>
                    <radio value="0">女</radio>
                    <radio value="-1">保密</radio>
                </radio-group>
            </view>

            <view class="regist-form-line">
                <picker
                 name="school"
                 :range="knowleageList"
                 :value="registForm.school"
                 @change="handleKnowleageChange"
                 >
                    <view>
                        <text>点击选择学历:</text>
                        <text>{{ knowleageList[registForm.school] }}</text>
                    </view>
                 </picker>
            </view>
            
            <view class="regist-form-footer regist-form-line">
                <button form-type="reset">重置</button>
                <button form-type="submit" type="primary">注册</button>
            </view>
        </form>

        <view><text>payload: {{ payload }}</text></view>
        <view><text>registForm: {{ registForm }}</text></view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                knowleageList: [
                    '初中',
                    '高中',
                    '本科',
                    '博士'
                ],
                registForm: {
                    username: '',
                    gender: '-1',
                    content: '',
                    school: 0
                },
                payload: null
            };
        },
        onLoad(payload) {
            this.payload = payload;
            console.log('payload = ', payload)
            console.log(getCurrentPages());
        },
        methods: {
            handleKnowleageChange(e) {
                if (!e || !e.detail) {
                    return
                }
                this.registForm.school = e.detail.value
            },
            handleRegist(e) {
                if (!e || !e.detail || !e.detail.value) {
                    return
                }
                const { username, gender, content } = e.detail.value
                this.registForm.username = username
                this.registForm.gender = gender
                this.registForm.content = content
            },
            handleReset() {
                this.registForm.username = ''
                this.registForm.gender = ''
                this.registForm.content = ''
                this.registForm.school = 0
                uni.showActionSheet({
                	title: '你住哪里呀？',
                
                	itemList: ['北京', '上海', '广州', '深圳'], // 按钮的文字数组 [最多6组]
                	itemColor: '#000000', // 取消按钮的文字颜色
                
                	success: (res) => { // 成功回调, 索引从0开始, 从上至下
                		console.log('用户点了', res)
                	},
                	fail: () => {}, // 失败回调
                	complete: () => {} // 处理完成回调
                })
            }
        }
    }
</script>

<style lang="scss">
.regist-page {
    box-sizing: border-box;
    padding-top: 32rpx;
    .regist-form-line {
        box-sizing: border-box;
        padding: 0 16rpx;
        &:not(:first-child) {
            margin-top: 32rpx;
        }
        input,
        textarea {
            box-sizing: border-box;
            padding: 0 16rpx;
            border: 1px solid #f6f6f6;
        }
    }
    .regist-form-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
