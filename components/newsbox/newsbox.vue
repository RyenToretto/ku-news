<template>
  <view v-if="newsInfo" class="newsbox">
    <view class="pic">
      <image :src="newsInfo.picurl" mode="aspectFill"></image>
    </view>

    <view class="text">
      <view class="title">
        {{newsInfo.title}}
      </view>

      <view v-if="newsInfo.looktime" class="info">
        <text>浏览时间：{{newsInfo.looktime}}</text>
      </view>
      <view v-else class="info">
        <text>{{newsInfo.author}}</text>
        <text>{{newsInfo.hits}}浏览</text>
      </view>
    </view>
  </view>
  <view v-else></view>
</template>

<script>
export default {
  name: "newsbox",
  props: {
    newsInfo: {
      type:Object,
      default() {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
.newsbox{
  display: flex;
  .pic{
    width: 230rpx;
    height: 160rpx;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    flex:1;
    padding-left:20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
      font-size: 36rpx;
      color:#333;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;				//溢出内容隐藏
      text-overflow: ellipsis;		//文本溢出部分用省略号表示
      display: -webkit-box;			//特别显示模式
      -webkit-line-clamp: 2;			//行数
      line-clamp: 2;
      -webkit-box-orient: vertical;	//盒子中内容竖直排列
    }
    .info{
      font-size: 26rpx;
      color:#999;
      text{
        padding-right: 30rpx;
      }
    }
  }
}
</style>
