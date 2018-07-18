<template>
<div class="page">
  <div class="home-page" style="padding: 1rem 0 0.5rem 0;">
    <!-- pc title -->
    <el-row class="home-page-title  hidden-xs-only">
      <h1>{{ $t('m.home.title') }}</h1>
      <p style="font-weight: 600;">{{ $t('m.home.nextTitle') }}</p>
      <p style="font-size: 26px;line-height: 40px;">{{ $t('m.home.threeTitle') }}</p>
    </el-row>
    <!-- phone title -->
    <el-row class="home-phone-page-title hidden-sm-and-up">
      <h1>{{ $t('m.home.title') }}</h1>
      <p style="font-weight: 600;font-size: 25px;">{{ $t('m.home.nextTitle') }}</p>
      <p style="font-size: 24px;">{{ $t('m.home.threeTitle') }}</p>
    </el-row>
    <!-- pc 下载 -->
    <el-row class="load-container  hidden-xs-only" >
      <div class="android-load load-btn" v-show=" $i18n.locale === 'zh'"  @click="downloadTo('http://down.windtalk.net:8080/ClientFile/android_1.0.0016.apk')">
        <img src="../../assets/imgs/android.png" alt="">
        <span>{{ $t('m.download.android') }}</span>
      </div>
      <div class="android-load load-btn" v-show=" $i18n.locale === 'en'"  @click="downloadTo('https://play.google.com/store/apps/details?id=com.windtalk.wind')">
        <img src="../../assets/imgs/google.png" alt="">
        <span>{{ $t('m.download.android') }}</span>
      </div>
      <div class="phone-load load-btn">
        <img src="../../assets/imgs/ios.png" alt="">
        <span>{{ $t('m.download.ios') }}</span>
      </div>
    </el-row>
    <!-- phone下载 -->
    <el-row class="phone-load-container hidden-sm-and-up" >
      <div class="android-load phone-load-btn" v-show=" $i18n.locale === 'zh'" @click="downloadTo('http://down.windtalk.net:8080/ClientFile/android_1.0.0016.apk')">
        <img src="../../assets/imgs/android.png" alt="">
        <span>{{ $t('m.download.android') }}</span>
      </div>
      <div class="android-load phone-load-btn" v-show=" $i18n.locale === 'en'" @click="downloadTo('https://play.google.com/store/apps/details?id=com.windtalk.wind')">
        <img src="../../assets/imgs/google.png" alt="">
        <span>{{ $t('m.download.android') }}</span>
      </div>
      <div class="phone-load phone-load-btn">
        <img src="../../assets/imgs/ios.png" alt="">
        <span>{{ $t('m.download.ios') }}</span>
      </div>
    </el-row>
    <el-row class="top-cneter-picture hidden-xs-only">
      <img src="./../../../static/img/home/banner1.png" alt="">
    </el-row>
    <el-row class="top-cneter-picture hidden-sm-and-up" >
      <img src="./../../../static/img/home/phone_center.png" alt="">
    </el-row>
    <el-row  class="show pointer" @click.native="navigateTo('windtalk')">
      <el-col :xs="24" :sm="10"  class="fl" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{ $t('m.home.contentTitle1') }}</h2>
            <p>{{ $t('m.home.content1') }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fr">
        <div class="grid-content bg-purple">
          <img v-lazy="'./../../../static/img/home/home4.png'" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show pointer"  @click.native="navigateTo('digitalAsset')">
      <el-col :xs="24" :sm="10"  class="fr" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{ $t('m.home.contentTitle2') }}</h2>
            <p>{{ $t('m.home.content2') }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fl">
        <div class="grid-content bg-purple">
          <img v-lazy="'./../../../static/img/home/home2.png'" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show pointer"  @click.native="navigateTo('wto')">
      <el-col :xs="24" :sm="10"  class="fl" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{ $t('m.home.contentTitle3') }}</h2>
            <p>{{ $t('m.home.content3') }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fr">
        <div class="grid-content bg-purple">
          <img v-lazy="'./../../../static/img/home/home3.png'" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row  class="show" >
      <el-col :xs="24" :sm="10"  class="fr" >
        <el-row class="show-info-contianer">
          <el-col class="show-info" >
            <h2>{{ $t('m.home.contentTitle4') }}</h2>
            <p>{{ $t('m.home.content4') }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="10" class="fl">
        <div class="grid-content bg-purple">
          <img v-lazy="'./../../../static/img/home/home5.png'" alt="">
        </div>
      </el-col>
    </el-row>
    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
import Vfooter from '@/components/v-footer.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    navigateTo (val) {
      this.$router.push('/' + val)
    },
    downloadTo (val) {
      window.open(val)
    }
  },
  components: {
    'v-footer': Vfooter
  }
}
</script>

<style lang="stylus">
  .home-page
    width 80%
    margin 0 auto
    .fr
      float right
    .fl
      float left
    .pointer
      cursor pointer
    img
      width 100%
    .home-page-title
      text-align center
      h1
        font-size 36px
        font-weight 900
        line-height 50px
      p
        font-size 28px
    .top-cneter-picture
      img
        width 120%
        margin-left -10%
    .home-phone-page-title
      h1
        font-size 28px
        font-weight 900
        line-height 30px
        padding-bottom 8px
      p
        font-size 26px
    .phone-load-container
      user-select none
      padding-top 0.54rem
      text-align center
      padding-bottom 0.55rem
    .load-container
      user-select none
      padding-top 0.54rem
      text-align center
    .load-btn
      cursor pointer
      display inline-block
      width 20%
      height 100%
      line-height 0.5rem
      background-color #4f73f6
      box-shadow 0 0.04rem 0.21rem 0 rgba(124, 173, 255, 0.16)
      border-radius 0.04rem
      transition all 0.2s ease
      &:hover
        transform scale(1.05)
      &.android-load
        margin-right 0.4rem
      img
        display inline-block
        height 0.26rem
        width 0.26rem
        padding 0.11rem 0.1rem 0 0
        vertical-align top
      span
        font-size 0.16rem
        color #fff
    .phone-load-btn
      display inline-block
      width 4.52rem
      height 1.6rem
      line-height 1.6rem
      background-color #4f73f6
      box-shadow 0px 0.08rem 0.42rem 0px rgba(124, 173, 255, 0.16)
      border-radius 0.08rem
      &.android-load
        margin-right 0.4rem
      img
        display inline-block
        height 0.74rem
        width 0.74rem
        vertical-align middle
        position relative
        top -0.1rem
      span
        font-size 0.5rem
        color #fff
    .show
      padding 0.3rem 0
      h2
        font-size 20px
        line-height 30px
        padding 0.3rem 0
        color #000735
      p
        font-size 16px
        line-height 30px
        color #878996
</style>
