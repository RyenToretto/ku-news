<template>
    <view class="article-list">
        <template v-if="articleList && articleList.length">
            <template v-for="eachArticle in articleList">
                <view class="each-article-line" :key="eachArticle.id" @click="toArticleDetail(eachArticle)">
                    <view class="each-article-title"><text>{{ eachArticle.title }}</text></view>
                    <view class="each-article-body"><text>{{ eachArticle.body }}</text></view>
                </view>
            </template>
        </template>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                articleList: ''
            }
        },
        onLoad() {
            this.getArticleList()  
        },
        methods: {
            getArticleList() {
                uni.showLoading({
                    title: '数据加载中'
                })
                uni.request({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    success: (res) => {
                        if (res && res.data && res.data.length) {
                            this.articleList = res.data
                        } else {
                            this.articleList = []
                        }
                    },
                    complete() {
                        uni.hideLoading()
                    }
                })
            },
            toArticleDetail(articleInfo) {
                uni.navigateTo({
                    url: `/pages/article/detail?aid=${articleInfo.id}`
                })
            }
        }
    }
</script>

<style lang="scss">
    .article-list {
        box-sizing: border-box;
        padding: 16rpx;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 0;
        .each-article-line {
            box-sizing: border-box;
            width: 100%;
            max-width: 1080rpx;
            cursor: pointer;
            text {
                font-size: 14px;
            }
            &:not(:first-child) {
                margin-top: 32rpx;
                padding-top: 32rpx;
                border-top: 1px dashed #aaa;
            }
            .each-article-title {
                text {
                    font-size: 16px;
                    font-weight: 700;
                }
            }
        }
    }
</style>
