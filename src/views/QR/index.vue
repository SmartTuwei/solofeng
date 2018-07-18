<template>
  <div class="qr-container">
      <div class="qr-content">
        <div class="img-content">
          <img src="../../assets/imgs/QR.png"/>
        </div>
        <div class="info">
          <p>{{$t('m.wto.whitepaperInfo')}}</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
  .qr-container
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    background #000000
    z-index 1000
    .qr-content
      position fixed
      width 50%
      height 45%
      top 0
      left 0
      bottom 0
      right 0
      margin auto
      color #fff
      .img-content
        width 100%
        padding-bottom 10%
        img
          width 100%
    .info
      text-align justify
      p
        line-height 0.6rem
        font-size 0.5rem
</style>
