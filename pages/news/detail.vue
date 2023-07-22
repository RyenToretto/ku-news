<template>
  <view class="news-detail">
    <view class="news-title">{{ newsDetail.title }}</view>

    <view class="news-info">
      <view class="news-author">编辑：{{ newsDetail.author }}</view>
      <view class="news-time">发布日期：{{ newsDetail.posttime }}</view>
    </view>

    <view class="news-content">
      <rich-text :nodes="newsDetail.content"></rich-text>
    </view>
  </view>
</template>

<script>
import { parseTime } from "@/utils/tool.js"


export default {
  data() {
    return {
      reqParams: {
        newsId: '',
        tabId: ''
      },
      newsDetail: {}
    }
  },
  onLoad(payload) {
    if (payload) {
      this.reqParams.newsId = payload.nid
      this.reqParams.tabId = payload.tid
    }
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      const mockNewsDetail = {
        id: this.reqParams.newsId, // ID
        classid: this.reqParams.tabId, // 栏目ID
        hits: 2143, // 阅读量
        posttime: '2023-07-26 14:46:52', // 发布时间
        picurl: 'http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg', // 预览图
        title: '果链下南洋: 印度剧透妄图抢夺中国企业', // 标题
        author: '望亭楼', // 作者
        content: // 正文
         '<img src="http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg" alt="" />银柿财经记者了解到，今日（9月16日）上午，东方财富（300059.SZ）开盘下挫，盘中最多时跌幅高达13.74%，截至上午收盘，大跌12.89%，成交101亿元。\n\n在东方财富大跌的同时，券商板块今日也重挫，如广发证券（000776.SZ）大跌7.63%，国联证券（601456.SH）大跌6.41%，财达证券（600906.SH）大跌6.33%，中信建投（601066.SH）大跌6.11%。\n\n和最近的一次暴跌，今年2月14日暴跌13.36%（不复权计算）一样，东方财富今天的走势引发市场热议，很多投资者称，又一次“关灯吃面”了。在2月14日，因可转债强制赎回等原因，东方财富跌幅达13.36%，报收27.49元/股，成交额超100亿元，盘中最大跌幅超15%。\n\n消息面上，昨日，国务院办公厅印发《关于进一步优化营商环境降低市场主体制度性交易成本的意见》。《意见》共提出23条具体措施，其中包括：着力规范金融服务收费，规范银行服务市场调节价管理，加强服务外包与服务合作管理，设定服务价格行为监管红线，加快修订《商业银行服务价格管理办法》。'
      }
      mockNewsDetail.content = mockNewsDetail.content.replace(/<img/gi,'<img style="max-width:100%"')
      this.newsDetail = mockNewsDetail
      this.saveNewsHistory()
      uni.setNavigationBarTitle({
        title: this.newsDetail.title
      })
    },
    saveNewsHistory() {
      let newsHistory = uni.getStorageSync('news_history') || []
      let newsInfo = {
        id: this.newsDetail.id,
        classid: this.newsDetail.classid,
        picurl: this.newsDetail.picurl,
        title: this.newsDetail.title,
        looktime: parseTime(Date.now())
      }
      let index = newsHistory.findIndex(i=>{
        return i.id === this.newsDetail.id
      })

      if (index >= 0) {
        newsHistory.splice(index, 1)
      }

      newsHistory.unshift(newsInfo)
      newsHistory = newsHistory.slice(0, 10)
      uni.setStorageSync('news_history', newsHistory)
    }
  }
}
</script>

<style lang="scss">
  .news-detail {
    padding:30rpx;
    .news-title {
      font-size: 46rpx;
      color:#333;
    }
    .news-info {
      background: #F6F6F6;
      padding:20rpx;
      font-size: 25rpx;
      color:#666;
      display: flex;
      justify-content: space-between;
      margin:40rpx 0;
    }
    .news-content {
      padding-bottom:50rpx;
    }
  }
</style>
