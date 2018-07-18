<template>
  <div :class="isBottomDetal? 'common-header active':'common-header'">
    <el-row tag="div">
      <el-col>
        <div class="logo-container">
          <div class="logo hidden-xs-only" @click="backToHome">
            <img style="height: 28px;width:28px;vertical-align:middle;position:relative;top:-3px;" src="../assets/imgs/logo.png" alt="windtalkLogo">
            <span style="font-size:16px;line-height:60px" class="logo-title">Windtalk</span>
          </div>
          <div class="phone-logo hidden-sm-and-up" @click="backToHome">
            <img  src="../assets/imgs/logo.png" alt="windtalkLogo">
            <span class="phone-logo-title">Windtalk</span>
          </div>
          <div class="navLink hidden-xs-only">
            <!-- <el-tabs v-model="navStatus" @tab-click="reviewType">
              <el-tab-pane label="Home" name="index">
              </el-tab-pane>
              <el-tab-pane label="Windtalk" name="windtalk">
              </el-tab-pane>
              <el-tab-pane label="Digital Asset" name="digitalAsset">
              </el-tab-pane>
              <el-tab-pane label="WTO" name="wto">
              </el-tab-pane>
              <el-tab-pane label="Community" name="community">
              </el-tab-pane>
            </el-tabs> -->
            <!-- <ul ">
              <li v-for="item in navlist">
                {{ item.name }}
              </li>
            </ul> -->
            <ul class="header-nav-list">
              <li :class="navStatus === 'index'? 'active' : ''" @click="navigateTo('index')">
                <span >{{ $t('m.header.home') }}</span>
              </li>
              <li :class="navStatus === 'windtalk'? 'active' : ''" @click="navigateTo('windtalk')">
                <span >{{ $t('m.header.windtalk') }}</span>
              </li>
              <li :class="navStatus === 'digitalAsset'? 'active' : ''" @click="navigateTo('digitalAsset')">
                <span >{{ $t('m.header.digitalAsset') }}</span>
              </li>
              <li :class="navStatus === 'wto'? 'active' : ''" @click="navigateTo('wto')">
                <span >{{ $t('m.header.wto') }}</span>
              </li>
              <li :class="navStatus === 'community'? 'active' : ''"  @click="navigateTo('community')">
                <span >{{ $t('m.header.community') }}</span>
              </li>
              <div class="changeLange" >
                <img style="width: 26px;vertical-align : middle;" v-if="$i18n.locale === 'en'"  src="../../static/img/header/en.png" alt="">
                <img style="width: 26px;vertical-align : middle;" v-show=" $i18n.locale === 'zh'" src="../../static/img/header/zh.png" alt="">
                <div class="changeLangeModel">
                  <div class="item"><img @click="changeLocaleEn" style="width: 26px;vertical-align : middle; cursor: pinter"  src="../../static/img/header/en.png" alt=""></div>
                  <div class="item"><img @click="changeLocaleZh" style="width: 26px;vertical-align : middle;"  src="../../static/img/header/zh.png" alt=""></div>
                </div>
              </div>
            </ul>
          </div>
          <div class="phone-link hidden-sm-and-up">
            <div class="minus" @click.stop="showNavList">
              <!-- <i class="el-icon-tickets navlist" @click="showNavList"></i> -->
              <span  :class="showPhoneLinkModel? 'active': ''"></span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="showPhoneLinkModel" @touchmove.native.prevent="preventhing" class="phone-link-list-model hidden-sm-and-up">
      <i @click="showNavList" class="el-icon-close close-position"></i>
      <ul class="phone-link-list">
        <li >
          <span :class="navStatus === 'index'? 'active' : ''" @click="navigateGoTo('index')">{{ $t('m.header.home') }}</span>
        </li>
        <li >
          <span :class="navStatus === 'windtalk'? 'active' : ''" @click="navigateGoTo('windtalk')">{{ $t('m.header.windtalk') }}</span>
        </li>
        <li >
          <span :class="navStatus === 'digitalAsset'? 'active' : ''" @click="navigateGoTo('digitalAsset')">{{ $t('m.header.digitalAsset') }}</span>
        </li>
        <li >
          <span :class="navStatus === 'wto'? 'active' : ''" @click="navigateGoTo('wto')">{{ $t('m.header.wto') }}</span>
        </li>
        <li >
          <span :class="navStatus === 'community'? 'active' : ''"  @click="navigateGoTo('community')">{{ $t('m.header.community') }}</span>
        </li>
        <li >
          <span   @click="changeLocale">{{ $t('m.language.name') }}</span>
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Vheader',
  data () {
    return {
      isBottomDetal: false,
      navStatus: 'index',
      showPhoneLinkModel: false,
      fullwidth: document.documentElement.clientWidth
    }
  },
  computed: {
    path: function () {
      return this.$route.path === '/' ? 'index' : this.$route.path.slice(1)
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  preventhing: function () {
  },
  methods: {
    backToHome () {
      this.navStatus = 'index'
      this.$router.push('/index')
    },
    reviewType () {
      this.$router.push('/' + this.navStatus)
    },
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      this.showNavList()
      // LangStorage.setLang(this.$i18n.locale) //后面会用做切换和将用户习惯存储到本地浏览器
    },
    changeLocaleEn () {
      this.$i18n.locale = 'en'
      console.log(this.$i18n.locale)
    },
    changeLocaleZh () {
      this.$i18n.locale = 'zh'
      console.log(this.$i18n.locale)
    },
    stop () {
      var mo = function (e) {
        e.preventDefault()
      }
      let bodyNode = document.getElementsByTagName('body')[0]
      bodyNode.style.overflow = 'hidden'
      document.removeEventListener('touchmove', mo, false)
    },
    move () {
      var mo = function (e) {
        e.preventDefault()
      }
      let bodyNode = document.getElementsByTagName('body')[0]
      bodyNode.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    },
    showNavList () {
      this.showPhoneLinkModel = !this.showPhoneLinkModel
      if (this.showPhoneLinkModel) {
        this.stop()
      } else {
        this.move()
      }
    },
    navigateGoTo (val) {
      this.navStatus = val
      this.$router.push('/' + val)
      this.showNavList()
    },
    navigateTo (val) {
      this.navStatus = val
      this.$router.push('/' + val)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === 0) {
        this.isBottomDetal = false
      } else {
        this.isBottomDetal = true
      }
    },
    handleResize (event) {
      this.fullwidth = document.documentElement.clientWidth
      if (this.fullwidth >= 768) {
        this.showPhoneLinkModel = false
      }
    }
  },
  watch: {
    path: function () {
      this.navStatus = this.path
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="stylus">
.common-header
  position fixed
  top 0
  left 0
  font-size 12px
  height 60px
  width 100%
  background #fff
  line-height 60px
  z-index 10
  &.active
    box-shadow 0px 2px 18px 0px rgba(197, 211, 242, 0.13)
  .minus
    display inline-block
    height 40px
    margin-top 10px
    line-height 40px
    span
      display inline-block
      height 2px
      border-radius 1px
      cursor pointer
      width 20px
      background #000
      position relative
      transition all 0.2s ease
      top -4px
      &.active
        transform rotate(90deg)
      &:after
        position absolute
        top 6px
        left 0
        content ''
        height 2px
        width 20px
        background #000
        border-radius 1px
      &:before
        position absolute
        top -6px
        left 0
        content ''
        height 2px
        width 20px
        background #000
        border-radius 1px
  .logo-container
    padding 0 20px
    margin 0 auto
  .logo-title
    font-size 0.16rem
  .phone-logo-title
    font-size 16px
  .logo
    line-height 60px
    float left
    cursor pointer
    user-select none
  .phone-logo
    line-height 60px
    float left
    cursor pointer
    user-select none
    span
      color #000
      text-decoration none
      font-weight 900
    img
      width 28px
      vertical-align middle
      position relative
      top -3px
  .navLink
    float right
  .header-nav-list
    height 40px
    padding-top 10px
    .changeLange
      float left
      line-height 60px
      width 105px
      height 60px
      cursor pointer
      text-align center
      position relative
      top -10px
      &:hover .changeLangeModel
        display block
      .changeLangeModel
        display none
        position absolute
        top 60px
        left 0
        width 105px
        padding-bottom 0.12rem
        background rgba(235, 235, 235, 0.4)
        z-index 100
        .item
          padding-top 0.12rem
          text-align center
          line-height 1
          width 100%
    li
      float left
      font-size 0.12rem
      font-weight 600
      line-height 40px
      height 40px
      padding 0 6px
      color #c3c5cc
      margin 0 0.22rem
      cursor pointer
      &.active
        color #000735
        border-bottom  2px solid #a3baff
      &:hover
        color #000735
  .phone-link
    float right
    .navlist
      font-size 20px
  .phone-link-list-model
    position fixed
    height 100%
    width 100%
    background #262626
    top 0
    left 0
    z-index 10000000
    overflow-y auto
    .close-position
      position absolute
      right 20px
      top 18px
      font-size 20px
      color #5f5f5f
  .phone-link-list
    padding-top 2rem
    li
      text-align center
      padding 0.3rem 0
      span
        color #4f4f4f
        cursor pointer
        line-height 1
        font-size 18px
        &.active
          color #949494
        &:hover
          color #949494
</style>
