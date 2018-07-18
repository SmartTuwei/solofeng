<template>
  <div class="page">
  <div class="digitalAsset-page">
    <div class="hidden-xs-only pc-page" style="position:relative;">
        <h1>{{ $t('m.digitalAsset.title') }}</h1>
        <p class="content-one" style="position:absolute;width:4.08rem;right: 0.26rem;top:1.9rem;">{{ $t('m.digitalAsset.content1') }}</p>
        <p class="content-two" style="position:absolute; width: 4rem;left: 0.8rem;top:6.4rem;">{{ $t('m.digitalAsset.content2') }}</p>
        <p class="content-three" style="position:absolute; width:4rem;right: 0.26rem;top: 8.28rem;">{{ $t('m.digitalAsset.content3') }}</p>
        <p class="content-four pointer" style="position:absolute;width: 5.26rem;left: 3.38rem;top: 13.16rem;" @click="navigateTo('wto')">{{ $t('m.digitalAsset.content4') }}</p>
        <img v-lazy="'./../../../static/img/digital/pc1.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/pc2.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/pc3.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/pc4.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/pc5.jpg'" alt="">
        <div class="pointer" @click="navigateTo('wto')">
          <img v-lazy="'./../../../static/img/digital/pc6.jpg'" alt="">
          <img v-lazy="'./../../../static/img/digital/pc7.jpg'" alt="">
        </div>
    </div>
    <div class="hidden-sm-and-up phone-page" >
        <h1>{{ $t('m.digitalAsset.title') }}</h1>
        <p class="content-one" >{{ $t('m.digitalAsset.content1') }}</p>
        <p class="content-two" >{{ $t('m.digitalAsset.content2') }}</p>
        <p class="content-three" >{{ $t('m.digitalAsset.content3') }}</p>
        <p class="content-four pointer" @click="navigateTo('wto')">{{ $t('m.digitalAsset.content4') }}</p>
        <img v-lazy="'./../../../static/img/digital/p1.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/p2.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/p3.jpg'" alt="">
        <img v-lazy="'./../../../static/img/digital/p4.jpg'" alt="">
        <div class="pointer" @click="navigateTo('wto')">
          <img v-lazy="'./../../../static/img/digital/p5.jpg'" alt="">
          <img v-lazy="'./../../../static/img/digital/p6.jpg'" alt="">
        </div>
    </div>
  </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Vfooter from '@/components/v-footer.vue'
export default {
  name: 'dtgitalAsset',
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
  .digitalAsset-page
    .pointer
      cursor pointer
    .fr
      float right
    .fl
      float left
    img
      display block
      width 100%
      border 0
      padding 0
      margin 0
      min-height 2rem
    .pc-page
      position relative
      h1
        width 100%
        font-size 36px
        text-align center
        position absolute
        top 1rem
        left 0
      p
        position absolute
        line-height 20px
        font-size 16px
        color #333
      .content-one
        width 4.08rem
        right 0.26rem
        top 1.9rem
      .content-two
        width 4rem
        left 0.8rem
        top 6.4rem
      .content-three
        width 4rem
        right 0.26rem
        top 8.28rem
      .content-four
        width 5.26rem
        left 3.38rem
        top 13.16rem
        line-height 24px
        text-align center
    .phone-page
      position relative
      padding-bottom 2rem
      h1
        width 100%
        font-size 28px
        text-align center
        position absolute
        top 1rem
        left 0
      p
        position absolute
        font-size 14px
        line-height 20px
        color #333
      .content-one
        width 9.62rem
        left 1.18rem
        top 11.2rem
      .content-two
        width 9.62rem
        left 1.18rem
        top 19.8rem
      .content-three
        width 9.62rem
        left 1.18rem
        top 29.2rem
      .content-four
        width 9.62rem
        left 1.18rem
        top 37.6rem
        line-height 24px
        text-align center
</style>
