<template>
  <div id="home">
    <header class="header">
      <div class="header-icon">
        <router-link to="all"><span class="head-typeing"></span></router-link>
      </div>
      <nav class="header-nav">
        <transition name="nav_ul">
          <ul class="nav-ul"><!--selected-->
            <!--<li class="font-large" v-for="l in larges"><a href="#">{{l.name}}</a></li>-->
            <li class="font-large selected"><a href="#">首页</a></li>
            <li class="font-large"><a href="#">新品</a></li>
            <li class="font-large"><a href="#">家务</a></li>
            <li class="font-large"><a href="#">下厨</a></li>
            <li class="font-large"><a href="#">家居服</a></li>
            <li class="font-large"><a href="#">生活</a></li>
            <li class="font-large"><a href="#">软装</a></li>
            <li class="font-large"><a href="#">床品</a></li>
            <li class="font-large"><a href="#">工作和旅行</a></li>
            <li class="font-large"><a href="#">了解LifeVC</a></li>
          </ul>
        </transition>
      </nav>
    </header>
    <scroller :on-refresh="refresh"
              loading-layer-color="#ec4949"
              refresh-layer-color="#4b8bf4">
      <div class="home_content">
        <!--轮播图-->
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <!--<li class="swiper-slide" v-for="str in listImg"><img src="./1.jpg"></li>-->
            <li class="swiper-slide"><img src="./1.jpg"></li>
            <li class="swiper-slide"><img src="./2.jpg"></li>
            <li class="swiper-slide"><img src="./3.jpg"></li>
            <li class="swiper-slide"><img src="./4.jpg"></li>
            <li class="swiper-slide"><img src="./5.jpg"></li>
            <li class="swiper-slide"><img src="./6.jpg"></li>
            <li class="swiper-slide"><img src="./7.jpg"></li>
            <li class="swiper-slide"><img src="./8.jpg"></li>
          </ul>
          <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <!--广告-->
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="img-wrap" style="height: 90px;">
              <img usemap="#planetmap0"
                   src="http://i.lifevccdn.com/upload/combinationchart/b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg"
                   lazy="loaded"
                   style="width: 100%; height: 90px;">
              <map name="planetmap0" id="planetmap0">
                <area shape="rect" coords="0,9,123,88">
                <area shape="rect" coords="123,9,251,90">
                <area shape="rect" coords="251,9,375,89">
              </map>
            </div>
          </div>
        </div>
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="img-wrap" style="height: 150px;">
              <img usemap="#planetmap1"
                   src="http://i.lifevccdn.com/upload/combinationchart/fd21885d82b64d66afdde74fe77af6c8_d1242x0.jpg"
                   lazy="loaded"
                   style="width: 100%; height: 150px;">
              <map name="planetmap1" id="planetmap1">
                <area shape="rect" coords="0,1,375,148">
              </map>
            </div>
          </div>
        </div>
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="item-combo" style="height: 925px;">
              <img usemap="#planetmap2"
                   src="http://i.lifevccdn.com/upload/combinationchart/8c83c6cb65ab4371a0fe6a972139301c_d1242x0.jpg"
                   lazy="loaded" style="width: 100%; height: 925px;">
              <map name="planetmap2" id="planetmap2">
                <area shape="rect" coords="0,64,375,231">
                <area shape="rect" coords="0,240,375,407">
                <area shape="rect" coords="0,407,375,573">
                <area shape="rect" coords="0,573,123,749">
                <area shape="rect" coords="123,573,251,749">
                <area shape="rect" coords="251,573,375,749">
                <area shape="rect" coords="0,749,123,925">
                <area shape="rect" coords="123,749,251,925">
                <area shape="rect" coords="251,749,375,925">
              </map>
            </div>
          </div>
        </div>
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="img-wrap" style="height: 238px;">
              <img usemap="#planetmap3"
                   src="http://i.lifevccdn.com/upload/combinationchart/7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg"
                   lazy="loaded"
                   style="width: 100%; height: 238px;">
              <map name="planetmap3" id="planetmap3">
                <area shape="rect" coords="0,26,371,235">
              </map>
            </div>
          </div>
        </div>
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="img-wrap" style="height: 310px;">
              <img usemap="#planetmap4"
                   src="http://i.lifevccdn.com/upload/combinationchart/3cea975b99f9458198e9ed706af9b391_d1242x0.jpg"
                   lazy="loaded"
                   style="width: 100%; height: 310px;">
              <map name="planetmap4" id="planetmap4">
                <area shape="rect" coords="3,46,86,158">
                <area shape="rect" coords="93,46,191,164">
                <area shape="rect" coords="191,46,281,164">
                <area shape="rect" coords="285,46,371,164">
                <area shape="rect" coords="3,170,90,294">
                <area shape="rect" coords="93,170,183,294">
                <area shape="rect" coords="187,170,281,294">
                <area shape="rect" coords="281,170,375,294">
              </map>
            </div>
          </div>
        </div>
        <div class="item-combo">
          <div title="组合图活动">
            <div class="combo-title"></div>
            <div class="img-wrap" style="height: 100px;">
              <img usemap="#planetmap5"
                   src="http://i.lifevccdn.com/upload/combinationchart/fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg"
                   lazy="loaded"
                   style="width: 100%; height: 100px;">
              <map name="planetmap5" id="planetmap5">
                <area shape="rect" coords="0,2,375,101">
              </map>
            </div>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: {
      refresh: Function
    },
    mounted () {
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 3000,
        onTouchEnd () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html
    #home
      margin: 8rem 0
      .header
        .header-icon
          position: relative
          width: 100%
          height: 4rem
          background: #89be48
          background-image: url('./header-bg.png')
          background-size: 50%
          background-repeat: no-repeat
          background-position: 50%
          a
            position: absolute
            top: 0
            right: 0
            .head-typeing
              display: block
              width: 4rem
              height: 4rem
              background: url("./search.png") no-repeat center
              background-size: 20px
        .header-nav
          width: 100%
          .nav-ul
            height: 4rem
            white-space: nowrap
            background: #fff
            .font-large
              display: inline-block
              width: 80px
              text-align: center
              a
                height: 3.8rem
                display: block
                line-height: 3.8rem
                font-size: 1.35rem
            .selected
              border-bottom: .2rem solid #80b532
              z-index: 1
              a
                color: #89be48
      .home_content
        padding-bottom: 8rem
        .swiper-container
          margin-top: 0 0
          width: 100%
          .swiper-wrapper
            width: 100%
          .swiper-slide
            background-position: center
            background-size: cover
            width: 100%
            img
              width: 100%
          .swiper-pagination-bullet
            width: 0.833rem
            height: 0.833rem
            display: inline-block
            background: #3aad36
        .item-combo
          margin-bottom: 1rem
          .combo-title
            width: 100%
            text-align: center
            font-size: 2rem
            .img-wrap
              background: #eee url("./new_goods.jpg") no-repeat
              img
                width: 100%
                vertical-align: middle
                border: 0 none
</style>
