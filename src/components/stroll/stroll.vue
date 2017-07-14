<template>
  <div id="stroll">
    <header class="header"><p>闲逛</p></header>
    <scroller :on-refresh="refresh"
              loading-layer-color="#ec4949"
              refresh-layer-color="#4b8bf4">
      <div class="content-warp">
        <div class="stroll-all-item">
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./4.jpg" class="stroll-item-img">
                <span class="tag-new">NEW</span>
              </div>
              <p class="stroll-item-title"><span>耐磨高弹力旅行箱保护套</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 39 </span>
                <span class="original"> ¥ 49 </span>
                <span class="comment">月销 5368</span>
              </div>
            </div>
          </a>
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./5.jpg" class="stroll-item-img">
                <span class="tag-new">NEW</span>
              </div>
              <p class="stroll-item-title"><span>全棉舒适四件套(绵羊)</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 269 </span>
                <span class="original"> ¥ 319 </span>
                <span class="comment">月销 1681</span>
              </div>
            </div>
          </a>
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./6.jpg" class="stroll-item-img">
                <span class="tag-new">NEW</span>
              </div>
              <p class="stroll-item-title"><span>全效洗衣液(5合1)</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 39 </span>
                <span class="comment">月销 10250</span>
              </div>
            </div>
          </a>
        </div>
        <div class="stroll-all-item">
          <div class="stroll-item">
            <div class="cat-menu-a">49元包1年</div>
            <div class="cat-menu-a">今日新品</div>
            <div class="cat-menu-a">送500元积分</div>
            <div class="cat-menu-a">金币商城</div>
          </div>
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./1.jpg" class="stroll-item-img">
                <span class="tag-new">NEW</span>
              </div>
              <p class="stroll-item-title"><span>分类整理收纳箱</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 49 </span>
                <span class="comment">月销 3629</span>
              </div>
            </div>
          </a>
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./2.jpg" class="stroll-item-img">
              </div>
              <p class="stroll-item-title"><span>可挂式防潮除湿剂(8袋装)</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 30 </span>
                <span class="comment">月销 4511</span>
              </div>
            </div>
          </a>
          <a  href="javacript:;" class="stroll-item">
            <div class="stroll-type-item">
              <div class="stroll-item-layer">
                <img src="./3.jpg" class="stroll-item-img">
              </div>
              <p class="stroll-item-title"><span>加拿大原生木浆抽纸(12包)</span></p>
              <div class="stroll-price-bar">
                <span class="price"> ¥ 29 </span>
                <span class="comment">月销 7317</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      refresh: Function
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #stroll
    margin-top: 4rem
  .content-warp
    display: flex
    width: 100%
    background: #fff
    .stroll-all-item
      flex: 1
      .stroll-item
        display: block
        margin: 3%
        width: 94%
        .stroll-type-item
          .stroll-item-layer
            position: relative
            border-radius: 8px
            .stroll-item-img
              width: 100%
              border-radius: 8px
            .tag-new
              max-width: 94%
              font-size: .8rem
              line-height: .4rem
              padding: .5rem
              position: absolute
              left: 0
              top: .8rem
              text-align: center
              color: #fff
              background: #79da87
          .stroll-item-title
            font-size: .95rem
            padding: .4rem 0 .2rem
            overflow: hidden
            white-space: nowrap
            word-break: keep-all
            text-overflow: ellipsis
            span
              color: #333
              text-decoration: none
              font-size: 1.35rem
          .stroll-price-bar
            text-align: left
            width: 100%
            height: 1.5rem
            font-size: .9rem
            .price
              font-size: 1.8rem
              line-height: 1.5rem
              display: inline-block
              font-weight: 400
              text-align: left
              color: #ff475d
            .original
              font-size: .9rem
              display: inline-block
              color: #888
              text-decoration: line-through
              margin-left: 5px
            .comment
              float: right
              color: #999
              white-space: nowrap
              word-break: keep-all
              text-overflow: ellipsis
              font-size: 1.4rem
              line-height: 1.5rem
        .cat-menu-a
          display: inline-block
          padding: .95rem .5%
          width: 47%
          min-height: 3rem
          line-height: 3rem
          border-radius: 8px
          vertical-align: middle
          font-size: 1.35rem
          color: #4a4a4a
          background: #eaeaea
          text-align: center
</style>
