<template>
  <div id="app" v-cloak>
    <keep-alive>
      <v-header></v-header>
    </keep-alive>
      <router-view/>
  </div>
</template>

<script>
import Vheader from '@/components/v-header.vue'
export default {
  name: 'App',
  components: {
    'v-header': Vheader
  },
  mounted () {
    let that = this
    window.onresize = function () {
      that.getRem(1200, 100)
    }
    that.getRem(1200, 100)
  }
}
</script>
<style lang="stylus">
@import "./styl/reset.styl"
  #app
    box-sizing border-box
    padding-top 60px
    width 100%
    font-size 14px
    overflow-x hidden
  [v-cloak]
    display none
</style>
