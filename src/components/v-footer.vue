<template>
  <div class="common-footer">
    <div class="common-pc-footer hidden-xs-only" style="box-sizing:border-box;position: relative;width:100%;padding: 30px 65px 0;background: #40464c;">
      <el-row  type="flex"  justify="center" class="footer-top">
        <el-col class="send-container" @click.native="sendEmail" style="cursor:pointer;
          width:308px;
          height:38px;
          line-height:38px;
          padding:0 4px 0 17px;
          display:flex;
          justify-content:space-between;
          align-items: center;
          border-radius: 19px;
          background: #363b40;
          box-shadow: 0px 2px 40px 0px rgba(33, 37, 41, 0.04);">
            <div class="icon-container">
              <img src="../assets/imgs/footer/email.png" alt="email">
            </div>
            <div  class="information-container">
              <span class="ic-info">Contact@windtalk.net</span>
            </div>
            <div class="send-btn" >send</div>
        </el-col>
      </el-row>
      <el-row  type="flex" class="row-bg hidden-sm-and-up" justify="center">
      </el-row>
      <el-row  type="flex" class="row-bg" justify="center">
        <div class="friendLink">
          <li style="display: inline-block;height: 30px;width: 30px;" @click="navigateTo('http://instagram.com/windtalktoken')"><img src="../assets/imgs/footer/phone1.png" alt=""></li>
          <li style="display: inline-block;height: 30px;width: 30px;"  @click="navigateTo('https://www.facebook.com/profile.php?id=100026944451707')"><img src="../assets/imgs/footer/phone2.png" alt=""></li>
          <li style="display: inline-block;height: 30px;width: 30px;"  @click="navigateTo('https://t.me/windtalktoken')"><img src="../assets/imgs/footer/phone3.png" alt=""></li>
          <li style="display: inline-block;height: 30px;width: 30px;"  @click="navigateTo('https://twitter.com/windtalktoken')"><img src="../assets/imgs/footer/phone4.png" alt=""></li>
        </div>
      </el-row>
      <el-row class="hidden-xs-only pc-foooter">
        <p class="fl header-windtalk"><img style="display:inline-block;height:0.22rem; vertical-align: middle;padding-right :0.1rem;position: relative;top: -0.02rem;" src="../assets/imgs/footer/logo1.png" alt="logo1"><span style="font-size: 14px;line-height: 0.4rem" >Windtalk</span></p>
        <span class="fr" style="font-size: 14px;line-height: 0.4rem">Copyright © 2018 Wind Communication Group Limited, All Rights Reserved</span>
      </el-row>
    </div>
    <div class="common-phone-footer hidden-sm-and-up">
        <ul class="phone-firend-link">
          <li @click="navigateTo('http://instagram.com/windtalktoken')"><img src="../assets/imgs/footer/phone1.png" alt=""></li>
          <li @click="navigateTo('https://www.facebook.com/profile.php?id=100026944451707')"><img src="../assets/imgs/footer/phone2.png" alt=""></li>
          <li @click="navigateTo('https://t.me/windtalktoken')"><img src="../assets/imgs/footer/phone3.png" alt=""></li>
          <li @click="navigateTo('https://twitter.com/windtalktoken')"><img src="../assets/imgs/footer/phone4.png" alt=""></li>
          <li @click="sendEmail"><img src="../assets/imgs/footer/phone5.png" alt=""></li>
        </ul>
        <div class="phone-bottom">
          <div>
            <img src="../assets/imgs/footer/logo1.png" alt=""><span>Windtalk</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vfooter',
  data () {
    return {
    }
  },
  methods: {
    sendEmail () {
      window.location = 'mailto:contact@windtalk.net'
    },
    navigateTo (val) {
      window.open(val)
    }
  }
}
</script>

<style lang="stylus">
.common-footer
  .fr
      float right
  .fl
    float left
  .common-pc-footer
    box-sizing border-box
    position relative
    width 100%
    padding 30px 65px 0
    background #40464c
    .header-windtalk
      float left
      line-height 40px
      img
        display inline-block
        height 22px
        vertical-align middle
        padding-right 10px
        position relative
        top -2px
    .footer-top
      padding-bottom 30px
      border-bottom 1px solid #4e565d
      margin-bottom 30px
    .send-container
      cursor pointer
      width 3rem
      height 38px
      line-height 38px
      padding 0 4px 0 17px
      display flex
      justify-content space-between
      align-items center
      border-radius 19px
      background #363b40
      box-shadow 0px 2px 40px 0px rgba(33, 37, 41, 0.04)
      .icon-container
        width 30px
        user-select none
        display flex
        justify-content center
        cursor pointer
        img
          height 24px
          vertical-align middle
          cursor pointer
      .send-btn
        height 30px
        width 60px
        color #fff
        cursor pointer
        user-select none
        background #6169ea
        border-radius 15px
        text-align center
        line-height 30px
        font-size 12px
        margin-left 10px
      .information-container
        flex 1
        height 30px
        line-height 30px
        .ic-info
          cursor pointer
          display block
          width 100%
          height 30px
          border 0
          outline none
          background #363b40
          color #676d74
          overflow hidden
    .friendLink
      li
        display inline-block
        height 30px
        width 30px
        margin-right 28px
        cursor pointer
        img
          height 100%
          width 100%
        &:last-child
          margin-right 0
    .pc-foooter
      padding-top 30px
      width 100%
      span
        color #5e646b
  .common-phone-footer
    box-sizing border-box
    width 100%
    background #40464c
    padding 0.8rem 0.4rem 0
    .phone-firend-link
      box-sizing border-box
      padding 0 0.96rem 0.7rem
      display flex
      justify-content space-between
      border-bottom 1px solid #4e565d
      li
        height 1.06rem
        width 1.06rem
        cursor pointer
        img
          height 100%
          width 100%
    .phone-bottom
      width 100%
      height 1.65rem
      display flex
      justify-content center
      align-items center
      div
        line-height 0.8rem
      img
        height 0.8rem
        width 0.8rem
        vertical-align middle
        padding-right 0.1rem
      span
        color #6f7378
</style>
