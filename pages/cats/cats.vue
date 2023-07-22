<template>
    <view class="cats-page">
        <template v-if="picList && picList.length">
            <template v-for="eachPic in picList">
                <view class="pic-box" :key="eachPic.id">
                    <image :src="eachPic.url" mode="widthFix"></image>
                </view>
            </template>
        </template>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                picList: ''
            }
        },
        onLoad() {
          this.getPicList()  
        },
        methods: {
            getPicList() {
                uni.showLoading({
                    title: '数据加载中'
                })
                uni.request({
                    method: 'GET',
                    url: 'https://api.thecatapi.com/v1/images/search',
                    data: {
                        api_key: 'live_QFIlSebOyBbOL1TDgpapeHlv1HxCqgzgeGLiTMChDTKadvBOTazBYDN6eP3HIbs2',
                        size: 'small',
                        order: 'Random',
                        limit: 3,
                        page: 1
                    },
                    success: (res) => {
                        if (res && res.data && res.data.length) {
                            this.picList = res.data
                        } else {
                            this.picList = []
                        }
                    },
                    complete() {
                        uni.hideLoading()
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .cats-page {
        box-sizing: border-box;
        padding: 16rpx;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 0;
        .pic-box {
            box-sizing: border-box;
            width: 100%;
            max-width: 1080rpx;
            overflow: hidden;
            image {
                width: 100%;
            }
            &:not(:first-child) {
                margin-top: 16rpx;
            }
        }
    }
</style>
