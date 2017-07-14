<template>
  <div class="app">
    <footer class="footer">
      <div>
        <ul class="footermenuNav">
          <li class="selected">
            <router-link to="home">
              <div class="ico homeico"></div>
              <span>首页</span>
            </router-link>
          </li>
          <li class="selected">
            <router-link to="all">
              <div class="ico typeico"></div>
              <span>全部产品</span>
            </router-link>
          </li>
          <li class="selected">
            <router-link to="stroll">
              <div class="ico strollico"></div>
              <span>闲逛</span>
            </router-link>
          </li>
          <li class="selected">
            <router-link to="usercenter">
              <div class="ico accountcenterico"></div>
              <span>账户中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </footer>
    <router-view :seller="seller" :refresh="refresh"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      seller: {}
    }
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        let start = this.top - 1
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }
        this.top = this.top - 10
        done()
      }, 1500)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    height: 100%
    position: relative
   .footer
    position: fixed
    left: 0
    right: 0
    bottom: 0
    width: 100%
    z-index: 1
    .footermenuNav
      width: 100%
      height: 4.5rem
      font-size: 0
      background: #f8f8f8
      border-bottom: .04rem solid #ddd
      .selected
        display: inline-block
        line-height: 2rem
        font-size: 1rem
        width: 25%
        text-align: center
        .ico
          width: 100%
          height: 1.5rem
          margin: .5rem 0 .2rem
        .homeico
          background-image: url('./img/home.png')
          background-repeat: no-repeat
          background-size: 1.5rem
          background-position: 50%
        .typeico
          background-image: url('./img/all.png')
          background-repeat: no-repeat
          background-size: 1.5rem
          background-position: 50%
        .strollico
          background-image: url('./img/stroll.png')
          background-repeat: no-repeat
          background-size: 1.5rem
          background-position: 50%
        .accountcenterico
          background-image: url('./img/user.png')
          background-repeat: no-repeat
          background-size: 1.5rem
          background-position: 50%
        .active
          color: #009c42
</style>
