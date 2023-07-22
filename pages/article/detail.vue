<template>
    <view class="article-detail">
        <view v-if="currentArticleDetail" class="article-info">
            <view class="article-title"><text>{{ currentArticleDetail.title }}</text></view>
            <view class="article-body"><text>{{ currentArticleDetail.body }}</text></view>
        </view>

        <view v-if="currentArticleComments && currentArticleComments.length" class="article-comments">
            <view class="article-comment-tips"><text>评论</text></view>
            <view class="article-comment-list">
                <template v-for="eachComment in currentArticleComments">
                    <view class="each-article-comment" :key="eachComment.id">
                        <view class="article-comment-head">
                            <view class="article-comment-title"><text>{{ eachComment.name }}</text></view>
                            <view class="article-comment-email"><text>{{ eachComment.email }}</text></view>
                        </view>
                        <view class="article-comment-body">
                            <view class="article-comment-content"><text>{{ eachComment.body }}</text></view>
                        </view>
                    </view>
                </template>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                currentArticleId: '',
                currentArticleDetail: null,
                currentArticleComments: null
            }
        },
        onLoad(payload) {
            if (!payload) {
                return
            }
            this.currentArticleId = payload.aid || ''
            this.getArticleDetail()
        },
        methods: {
            getArticleDetail() {
                uni.showLoading({
                    title: '数据加载中'
                })
                uni.request({
                    method: 'GET',
                    url: `https://jsonplaceholder.typicode.com/posts/${this.currentArticleId}`,
                    success: (res) => {
                        if (res && res.data && res.data.id) {
                            this.currentArticleDetail = res.data
                            this.getArticleComment()
                            uni.setNavigationBarTitle({
                            	title: this.currentArticleDetail.title || '详情'
                            })
                        } else {
                           this.currentArticleDetail = null 
                        }
                    },
                    complete: () => {
                        uni.hideLoading()
                    }
                })
            },
            getArticleComment() {
                uni.request({
                    method: 'GET',
                    url: `https://jsonplaceholder.typicode.com/posts/${this.currentArticleId}/comments`,
                    success: (res) => {
                        if (res && res.data && res.data.length) {
                            this.currentArticleComments = res.data
                        } else {
                            this.currentArticleComments = null
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .article-detail {
        box-sizing: border-box;
        padding: 16rpx;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 0;
        .article-info {
            box-sizing: border-box;
            width: 100%;
            max-width: 1080rpx;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            text {
                font-size: 14px;
            }
            .article-title {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: stretch;
                align-items: center;
                text {
                    flex: 1;
                    font-size: 16px;
                    font-weight: 700;
                }
            }
            .article-body {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text {
                    flex: 1;
                }
            }
        }
        .article-comments {
            box-sizing: border-box;
            width: 100%;
            max-width: 1080rpx;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            text {
                font-size: 14px;
            }
            .article-comment-tips {
                box-sizing: border-box;
                margin-top: 32rpx;
                width: 100%;
                padding-bottom: 16rpx;
                border-top: 1px solid #eee;
                font-size: 16px;
                font-weight: 700;
            }
            .article-comment-list {
                box-sizing: border-box;
                width: 100%;
                .each-article-comment {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    &:not(:first-child) {
                        margin-top: 32rpx;
                    }
                    .article-comment-head {
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: stretch;
                        .article-comment-title {
                            font-size: 12px;
                            color: #333;
                            font-weight: 700;
                            opacity: 0.5;
                        }
                        .article-comment-email {
                            font-size: 12px;
                            color: #333;
                            opacity: 0.3;
                            display: flex;
                            justify-content: flex-end;
                            align-items: flex-start;
                        }
                    }
                    .article-comment-body {
                        box-sizing: border-box;
                        padding-left: 48rpx;
                        width: 100%;
                        font-size: 12px;
                        color: #333;
                        opacity: 0.8;
                    }
                }
            }
        }
    }
</style>
