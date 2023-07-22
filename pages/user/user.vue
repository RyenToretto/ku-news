<template>
  <view class="user-page">
    <view class="news-history-list">
      <template v-for="eachNewsHistory in newsHistoryList">
        <view class="each-news-history">
          <newsbox
           :news-info="eachNewsHistory"
            @click.native="goDetail(eachNewsHistory)"
          ></newsbox>
        </view>
      </template>
    </view>

    <view class="no-history" v-if="!newsHistoryList.length">
      <image src="../../static/common/nohis.png" mode="widthFix"></image>
      <view class="text">暂无浏览记录</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      newsHistoryList:[]
    };
  },
  onShow(){
    this.getData()
  },
  methods:{
    //跳转到详情页
    goDetail(infoNewsHistory) {
      uni.navigateTo({
        url:`/pages/news/detail?tid=${infoNewsHistory.classid}&nid=${infoNewsHistory.id}`
      })
    },

    //获取缓存浏览记录
    getData() {
      let sNewsHistory = uni.getStorageSync("news_history") || []
      this.newsHistoryList = sNewsHistory
    }
  }
}
</script>

<style lang="scss">
  .user-page {
    .news-history-list{
      padding:30rpx;
      .each-news-history {
        border-bottom:1px dotted #efefef;
        padding:20rpx 0;
      }
    }
    .no-history {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      image {
        width: 450rpx;
      }
      .text {
        font-size: 26rpx;
        color:#888;
      }
    }
  }
</style>
