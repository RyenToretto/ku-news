<template>
    <view class="learn-page">
        <swiper
         class="learn-swiper-box learn-line"
         circular
         autoplay
         interval="3000"
         duration="200"
         indicator-dots
         indicator-color="#fff"
         indicator-active-color="#c6e1f6"
        >
            <swiper-item class="each-swiper-box">
                <image src="/static/photos/sw_01.jpg" mode="aspectFill"></image>
            </swiper-item>

            <swiper-item class="each-swiper-box">
                <image src="/static/photos/sw_02.jpg" mode="aspectFill"></image>
            </swiper-item>

            <swiper-item class="each-swiper-box">
                <image src="/static/photos/sw_03.jpg" mode="aspectFill"></image>
            </swiper-item>

            <swiper-item class="each-swiper-box">
                <image src="/static/photos/sw_04.jpg" mode="aspectFill"></image>
            </swiper-item>

            <swiper-item class="each-swiper-box">
                <image src="/static/photos/sw_05.jpg" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
        
        <view class="learn-jump-box learn-line">
            <navigator url="/pages/index/index">跳转到「起始页」</navigator>
        </view>

        <view class="learn-line">
            <text>图标</text>
            <icon type="warn"></icon>
            <icon type="waiting"></icon>
        </view>
        
        <view
         class="learn-random-box learn-line"
         :style="{ backgroundColor: bgRandomColor }"
         @click="changeRandomColor"
        >
            <text>{{ bgRandomColor }}</text>
        </view>
        
        <view class="learn-video-box learn-line">
            <video
             src="http://cyberplayer.bcelive.com/videoworks/mda-kbuhu4wqdi08dwix/cyberplayer/mp4/cyberplayer-demo.mp4"
             initial-time="0"
             :muted="true"
             :autoplay="true"
             :controls="false"
            ></video>
        </view>

        <scroll-view class="learn-scroll-box learn-line" scroll-x scroll-y>
            <view class="learn-scroll-list">
                <view class="each-scroll-box"><view class="each-scroll-core">1</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">2</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">3</view></view>
            </view>

            <view class="learn-scroll-list">
                <view class="each-scroll-box"><view class="each-scroll-core">4</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">5</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">6</view></view>
            </view>

            <view class="learn-scroll-list">
                <view class="each-scroll-box"><view class="each-scroll-core">7</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">8</view></view>
                <view class="each-scroll-box"><view class="each-scroll-core">9</view></view>
            </view>

            <view class="learn-scroll-list">
                <view class="each-scroll-box"><view class="each-scroll-core">10</view></view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    const generageRandomInteger = (min, max, dec = 0) => {
        const ret = Math.random() * (max - min) + min;
        return ret.toFixed(dec)
    }
    export default {
        data() {
            return {
                bgRandomR: 0,
                bgRandomG: 0,
                bgRandomB: 0,
                bgRandomA: 0.31
            };
        },
        computed: {
            bgRandomColor() {
                return `rgba(${this.bgRandomR}, ${this.bgRandomG}, ${this.bgRandomB}, ${this.bgRandomA})`
            }
        },
        methods: {
            changeRandomColor() {
                this.bgRandomR = generageRandomInteger(0, 255);
                this.bgRandomG = generageRandomInteger(0, 255);
                this.bgRandomB = generageRandomInteger(0, 255);
                this.bgRandomA = generageRandomInteger(0, 1, 2);
            }
        }
    }
</script>

<style lang="scss">
.learn-page {
    box-sizing: border-box;
    padding: 16rpx;
    .learn-line {
        box-sizing: border-box;
        margin-top: 16rpx;
    }
    .learn-jump-box {
        text-decoration: underline;
    }
    .learn-swiper-box {
        box-sizing: border-box;
        height: 480rpx;
        .each-swiper-box {
            display: flex;
            justify-content: center;
            align-items: center;
            image {
                flex: 1;
            }
        }
    }
    .learn-random-box {
        box-sizing: border-box;
        height: 200rpx;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .learn-video-box {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        video {
            flex: 1;
        }
    }
    .learn-scroll-box {
        box-sizing: border-box;
        height: 500rpx;
        border: 1rpx solid #ff0000;
        .learn-scroll-list {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            .each-scroll-box {
                box-sizing: border-box;
                padding: 10rpx;
                min-width: 300rpx;
                height: 200rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                .each-scroll-core {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    background-color: #a0a9f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>
