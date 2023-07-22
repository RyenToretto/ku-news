<template>
  <view class="news-page">
    <scroll-view scroll-x class="news-nav-tab">
      <template v-for="(eachNewsTab, index) in newsTabList">
        <view class="each-news-nav"
              :class="index==currentTabIndex ? 'active' : ''"
              @click="clickNav(index, eachNewsTab.id)"
              :key="eachNewsTab.id"
        >{{eachNewsTab.classname}}</view>
      </template>
    </scroll-view>

    <view v-if="!newsList || !newsList.length" class="no-news-label">
      <image src="../../static/common/nodata.png" mode="widthFix"></image>
    </view>
    <template v-else>
      <view class="news-list" >
        <template v-for="eachNewsInfo in newsList">
          <div class="each-news-line" :key="eachNewsInfo.id">
            <newsbox :news-info="eachNewsInfo" @click.native="toNewsDetail(eachNewsInfo)"></newsbox>
          </div>
        </template>
      </view>

      <view v-if="newsList.length" class="news-coming">
        <view v-if="newsLoading === NEWS_LOADING">数据加载中...</view>
        <view v-if="newsLoading === NEWS_NO_MORE">没有更多了~~</view>
      </view>
    </template>
  </view>
</template>

<script>
  const NEWS_DEFAULT = 0 // 默认
  const NEWS_LOADING = 1 // 加载中
  const NEWS_NO_MORE = 2 // 没有更多了

  export default {
    data() {
      return {
        NEWS_DEFAULT,
        NEWS_LOADING,
        NEWS_NO_MORE,
        newsLoading: NEWS_DEFAULT,
        reqParams:{ pageNum: 1 },

        newsList: [],
        newsTabList: [],
        currentTabIndex: 0
      }
    },
    onReachBottom() {
      console.log("页面触底事件")
      if (this.newsLoading === NEWS_NO_MORE) {
        return;
      }
      this.reqParams.pageNum++;
      this.newsLoading = NEWS_LOADING;
      this.getNewsList();
    },
    onLoad() {
      this.getNewsNavList();
      this.getNewsList();
    },

    methods: {
      // 点击导航切换
      clickNav(tabIndex, tabId) {
        this.currentTabIndex = tabIndex;
        this.reqParams.pageNum = 1;
        this.newsList = []
        this.newsLoading = NEWS_DEFAULT;
        this.getNewsList();
      },

      // 跳转到详情页
      toNewsDetail(newsInfo) {
        uni.navigateTo({
          url:`/pages/news/detail?tid=${newsInfo.classid}&nid=${newsInfo.id}`
        })
      },

      //获取导航列表数据
      getNewsNavList() {
        if (this.newsTabList) {
          const currentStick = Date.now();
          this.newsTabList = [
            { id: currentStick + 1, classname: '国内' },
            { id: currentStick + 2, classname: '热点' },
            { id: currentStick + 3, classname: '推荐' },
            { id: currentStick + 4, classname: '本地' },
            { id: currentStick + 5, classname: '娱乐' },
            { id: currentStick + 6, classname: '全球' },
            { id: currentStick + 7, classname: '欧美' },
            { id: currentStick + 8, classname: '体育' },
            { id: currentStick + 9, classname: '游戏' },
            { id: currentStick + 11, classname: '潜水' },
            { id: currentStick + 12, classname: '科技' },
            { id: currentStick + 13, classname: '健康养生' },
            { id: currentStick + 14, classname: '灵异科幻' },
            { id: currentStick + 15, classname: '太空' },
          ]
          return
        }
      },

      // 获取新闻列表数据
      getNewsList() {
        if (this.newsLoading === NEWS_NO_MORE) {
          return
        }
        const currentStick = Date.now();
        this.newsList = [
          ...this.newsList,
          /*
          {
            id: '',
            title: '', // 标题
            picurl: '', // 预览图
            posttime: '', // 发布时间
            author: '', // 作者
            hits: '' // 阅读量
          },
          */
          {
            "id": currentStick + 2,
            "classid": currentStick + 21,
            "title": "谷歌vs反垄断：“消灭”Cookie计划将延至2024年",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659113387.png",
            "posttime": "1659105841",
            "hits": "339",
            "author": "腾讯新闻"
          },
          {
            "id": currentStick + 3,
            "classid": currentStick + 31,
            "title": "华为又“撞上”苹果，巅峰对决如何延续？",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          },
          {
            "id": currentStick + 4,
            "classid": currentStick + 41,
            "title": "击败日韩，国产新能源车打入BBA老巢",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          },
          {
            "id": currentStick + 5,
            "classid": currentStick + 51,
            "title": "辛巴举报同行背后的明星带货",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          },
          {
            "id": currentStick + 6,
            "classid": currentStick + 61,
            "title": "教育部: 已取消5类全国性高考加分项目",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          },
          {
            "id": currentStick + 7,
            "classid": currentStick + 71,
            "title": "果链下南洋: 印度剧透妄图抢夺中国企业",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          },
          {
            "id": currentStick + 8,
            "classid": currentStick + 81,
            "title": "国有大行开始小范围内测首批个人养老金账户",
            "picurl": "http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20220729/1659112918.jpg",
            "posttime": "1659105680",
            "hits": "658",
            "author": "侠客岛"
          }
        ]
        if (this.newsList && this.newsList.length > 50) {
          this.newsLoading = NEWS_NO_MORE
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-page {
    .news-nav-tab {
      height: 100rpx;
      background: #F7F8FA;
      white-space: nowrap;
      position: fixed;
      top:var(--window-top);
      left:0;
      z-index: 10;
      /deep/ ::-webkit-scrollbar {
        width: 4px !important;
        height: 1px !important;
        overflow: auto !important;
        background: transparent !important;
        -webkit-appearance: auto !important;
        display: block;
      }
      .each-news-nav {
        font-size: 40rpx;
        display: inline-block;
        line-height: 100rpx;
        padding:0 30rpx;
        color:#333;
        &.active{
          color:#31C27C;
        }
      }
    }
    .no-news-label {
      display: flex;
      justify-content: center;
      image{
        width: 360rpx;
      }
    }
    .news-list {
      padding:30rpx;
      padding-top:130rpx;
      .each-news-line {
        border-bottom:1px dotted #efefef;
        padding:20rpx 0;
      }
    }
    .news-coming {
      text-align: center;
      font-size: 26rpx;
      color:#888;
      line-height: 2em;
    } 
  }
</style>
