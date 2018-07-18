<template>
  <div class="notfind-container">
      Sorry !  您访问的页面丢失了......{{second}}s后自动跳转到首页！
  </div>
</template>
<script>
export default {
  data () {
    return {
      second: 5
    }
  },
  mounted () {
    var that = this
    var timer = setInterval(function () {
      if (that.second <= 0) {
        clearInterval(timer)
        that.$router.push('./index')
      }
      that.second--
    }, 1000)
  }
}
</script>
<style lang="stylus">
  .notfind-container
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    line-height 4rem
    font-size 0.3rem
    z-index 100000
    background #fff
    text-align center
</style>
