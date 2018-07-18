<template>
  <div class="page">
    <div class="community-page">
      <ul class="hidden-xs-only" style="padding-top: 1rem; width: 80%; margin: 0 auto;line-height: 48px; ">
        <li>
          <h1 style="font-size: 22px;font-weight: normal;font-stretch: normal;line-height: 48px;letter-spacing: 0px;color: #000735;padding-bottom: 26px; font-weight: 900">{{ $t('m.community.introduction1') }}</h1>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 30px;letter-spacing: 0px;color: #000735; ">{{ $t('m.community.introductionInfo1') }}</p>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 30px;letter-spacing: 0px;color: #000735;">{{ $t('m.community.introductionInfo12') }}</p>
          <div style="text-align: center;" >
            <img style="width: 2.99rem; height: 2.99rem" src="../../../static/img/community/community.png" alt="">
          </div>
        </li>
        <li>
          <h1 style="font-size: 22px;font-weight: normal;font-stretch: normal;line-height: 48px;letter-spacing: 0px;color: #000735;padding-bottom: 26px;font-weight: 900">{{ $t('m.community.introduction2') }}</h1>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 30px;letter-spacing: 0px;color: #000735; padding-bottom: 20px;">{{ $t('m.community.introductionInfo2') }}</p>
          <div style="text-align: center;">
            <img style="width: 2.99rem; height: 2.99rem" v-lazy="'../../../static/img/community/community1.png'" alt="">
          </div>
        </li>
      </ul>
      <ul class="hidden-sm-and-up" style="padding-top: 1rem; width: 80%; margin: 0 auto;line-height: 48px; ">
        <li>
          <h1 style="font-size: 22px;font-weight: normal;font-stretch: normal;line-height: 1.6;letter-spacing: 0px;color: #000735;padding-bottom: 10px;font-weight: 900">{{ $t('m.community.introduction1') }}</h1>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 1.8;letter-spacing: 0px;color: #000735; padding-bottom: 10px;">{{ $t('m.community.introductionInfo1') }}</p>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 1.8;letter-spacing: 0px;color: #000735;">{{ $t('m.community.introductionInfo12') }}</p>
          <div style="text-align: center;" >
            <img style="width: 100%;" v-lazy="'../../../static/img/community/community.png'" alt="">
          </div>
        </li>
        <li>
          <h1 style="font-size: 22px;font-weight: normal;font-stretch: normal;line-height: 1.6;letter-spacing: 0px;color: #000735;font-weight: 900;padding-bottom: 10px;">{{ $t('m.community.introduction2') }}</h1>
          <p style="font-size: 16px;font-weight: normal;font-stretch: normal;line-height: 1.8;letter-spacing: 0px;color: #000735; ">{{ $t('m.community.introductionInfo2') }}</p>
          <div style="text-align: center;">
            <img style="width: 100%;" v-lazy="'../../../static/img/community/community1.png'" alt="">
          </div>
        </li>
      </ul>
      <div class="title-container hidden-xs-only" style="padding-bottom: 0.6rem;">
        <h1 class="title" style="font-weight: 400" >{{ $t('m.community.title') }}</h1>
        <p>{{ $t('m.community.navTitle') }}</p>
      </div>
      <div class="phone-title-container hidden-sm-and-up">
        <h1 class="title" style="font-size: 22px;line-height: 30px;">{{ $t('m.community.title') }}</h1>
        <p style="line-height: 30px;">{{ $t('m.community.navTitle') }}</p>
      </div>
      <el-row >
        <el-col :xs="24" :sm="8" class="community-item">
          <div class="community-common">
            <img v-lazy="'./../../../static/img/community/QR-team.jpg'" alt="">
          </div>
          <h3>{{ $t('m.community.qrName1') }}</h3>
          <p>{{ $t('m.community.qrInfo1') }}</p>
        </el-col>
        <el-col :xs="24" :sm="8" class="community-item">
          <div class="community-common">
            <img v-lazy="'./../../../static/img/community/QR-service.jpg'" alt="">
          </div>
          <h3>{{ $t('m.community.qrName2') }}</h3>
          <p>{{ $t('m.community.qrInfo2') }}</p>
        </el-col>
        <el-col :xs="24" :sm="8" class="community-item">
          <div class="community-common">
            <img v-lazy="'./../../../static/img/community/QR-wto.jpg'" alt="">
          </div>
          <h3>{{ $t('m.community.qrName3') }}</h3>
          <p>{{ $t('m.community.qrInfo3') }}</p>
        </el-col>
      </el-row>
      <el-row class="community-bottom">
        <p @click="navigateTo('')">{{ $t('m.community.bottomInfo') }}</p>
      </el-row>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Vfooter from '@/components/v-footer.vue'
export default {
  name: 'community',
  components: {
    'v-footer': Vfooter
  },
  methods: {
    navigateTo (val) {
      this.$router.push('/' + val)
    }
  }
}
</script>

<style lang="stylus">
.community-page
  box-sizing border-box
  .fr
    float right
  .fl
    float left
  .title-container
    padding 0 0 .6rem
    margin 0 auto
    h1
      font-size 36px
      line-height 50px
    p
      font-size 28px
      text-align center
  .phone-title-container
    padding 1.16rem 0 1.5rem
    margin 0 auto
    h1
      font-size 18px
      text-align center
      line-height 20px
    p
      font-size 16px
      text-align center
      line-height 20px
  .title
    font-size 30px
    text-align center
  .phone-title
    font-size 18px
    text-align center
  .community-item
    padding-bottom 0.5rem
    h3
      text-align center
      font-size 18px
      color #000000
      line-height 30px
      font-weight 800
    p
      text-align center
      font-size 14px
      color #878996
      line-height 18px
  .community-common
    margin 0 auto
    width 40%
    img
      width 100%
      padding-bottom 0.2rem
  .community-bottom
    padding-bottom 0.3rem
    p
      text-align center
      cursor pointer
      font-size 14px
      color rgba(0, 0, 0, 0.7)
</style>
