<template>
  <div id="all">
    <header class="header">
      <p>全部产品</p>
      <div class="search-bar">
        <form>
          <input type="search" placeholder="搜索商品" class="searchinput">
          <input type="button" value="取消" class="sch-cancel" v-show="isShow">
        </form>
      </div>
    </header>
    <scroller :on-refresh="refresh"
              loading-layer-color="#ec4949"
              refresh-layer-color="#4b8bf4">
      <div class="content-wrap">
        <div class="life-goodsAll">
          <div class="life-goodsBox">
            <div class="life-goodsTip">家务</div>
            <ul class="life-goodsUl">
              <li>
                <img src="./1.jpg">
                <p>家务工具</p>
              </li>
              <li>
                <img src="./2.jpg">
                <p>家庭清洁剂</p>
              </li>
              <li>
                <img src="./3.jpg">
                <p>防霉除菌</p>
              </li>
              <li>
                <img src="./4.jpg">
                <p>百纳箱</p>
              </li>
              <li>
                <img src="./5.jpg">
                <p>衣物收纳</p>
              </li>
              <li>
                <img src="./6.jpg">
                <p>酵素洗衣液</p>
              </li>
              <li>
                <img src="./7.jpg">
                <p>魔力挂钩</p>
              </li>
              <li>
                <img src="./8.jpg">
                <p>生活必备</p>
              </li>
              <li>
                <img src="./9.jpg">
                <p>地毯地垫</p>
              </li>
            </ul>
          </div>
          <div class="life-goodsBox"><!---->
            <div class="life-goodsTip">
              <dl class="life-goodsMark">下厨</dl> <!----></div>
            <ul class="life-goodsUl clearFix onlyStyle">
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/a3628c4600c74cf2b2cce44eff7ffcf7.jpg"
                lazy="loaded">
                <dl>不粘锅</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/f372190e2e8543afafff1735da48a871.jpg"
                lazy="loaded">
                <dl>多功能锅</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/d20af14942824632a588b5253e0123c4.jpg"
                lazy="loaded">
                <dl>水壶水杯</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/9bb5047d7ea84fa48992939c6c64c123.jpg"
                lazy="loaded">
                <dl>厨房电器</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/96079b6d4fcf4c45b972f815dbe27fcb.jpg"
                lazy="loaded">
                <dl>厨房小帮手</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/4fada1bbc1ef4f1288c123044dc1a69a.jpg"
                lazy="loaded">
                <dl>刀具</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/16d5b0459ee34b9c9ca7ccd16ff7561a.jpg"
                lazy="loaded">
                <dl>餐具</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/d0e01200cefd4b658be736f064507fad.jpg"
                lazy="loaded">
                <dl>净水器</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/726881bfc9ad4874a658683a72f4910c.jpg"
                lazy="loaded">
                <dl>保温杯</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/70e0e1ec4d274b77bd27e8c306409063.jpg"
                lazy="loaded">
                <dl>焖烧罐</dl>
              </li>
            </ul>
          </div>
          <div class="life-goodsBox"><!---->
            <div class="life-goodsTip">
              <dl class="life-goodsMark">家居服</dl> <!----></div>
            <ul class="life-goodsUl clearFix onlyStyle">
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/df44f691be0144aab7d8d06e53883f03.jpg"
                lazy="loaded">
                <dl>内衣内裤</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/59d3fd2e47874f608f37089f6f8fd49e.jpg"
                lazy="loaded">
                <dl>夏凉拖鞋</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/bd59ff440fbc40598f4ba826c974fe26.jpg"
                lazy="loaded">
                <dl>起居拖鞋</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/132f105e964f449790f74c45c45a0c60.jpg"
                lazy="loaded">
                <dl>袜子</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/9de506e17a824525821025e7af063329.jpg"
                lazy="loaded">
                <dl>起居服</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/7cd02f0788d342f39213f1fc6085476a.jpg"
                lazy="loaded">
                <dl>婴童服</dl>
              </li>
              <li class="" style="height: 138px;"><img
                src="http://i.lifevccdn.com/upload/AppIndexIcon/0fec324684b542ae9b068289f82d87b9.jpg"
                lazy="loaded">
                <dl>保暖家居服</dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: { refresh: Function },
    data () {
      return {
        isShow: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #all
    margin-top: 8rem
    .search-bar
      background: #f2f2f2
      padding: .5rem 0
      form
        width: 94%
        height: 3rem
        border-radius: 6px
        overflow: hidden
        margin: 0 auto
        .sch-cancel
          width: 15%
          height: 3rem
          line-height: 3rem
          display: block
          float: right
          background: none
          background-color: transparent
          text-align: right
          font-size: 1.5rem
          color: #83b842
        .searchinput
          width: 100%
          height: 100%
          border-radius: 6px
          text-align: center
          color: #1f5350
          font-size: 1.6em
          font-family: Microsoft YaHei
          background: #fff
          background-image: url('./sceach.png')
          background-repeat: no-repeat
          background-size: auto 70%
          background-position: 38% .5rem
          padding-left: 3rem
        .changeStyle
          width: 88% !important
          background-position: .4rem .5rem !important
          text-align: left !important
  .content-wrap
    width: 100%
    background: #f2f2f2
    .life-goodsAll
      .life-goodsBox
        padding-top: 2rem
        .life-goodsTip
          width: 100%
          text-align: center
          height: 2.4rem
          line-height: 2.4rem
          font-size: 1.8rem
        .life-goodsUl
          width: 100%
          background: #fff
          overflow: hidden
          li
            float: left
            width: 33%
            height: 138px
            text-align: center
            border: 1px solid #f1f1f1
            margin: 0 0 -1px -1px
            p
              height: 2rem
              line-height: 2rem
              padding: .5rem 0 1rem
              font-size: 1.3rem
            img
              width: 60%
              margin: auto
              padding-top: 1rem
              background-image: url('./loading.png')
              background-size: 60px
              background-position: 50%
              background-repeat: no-repeat
</style>
