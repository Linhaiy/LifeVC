<template>
  <div id="usrtcenter">
    <header class="header">
      <p>账户中心</p>
      <a class="header-a" href="#">设置</a>
    </header>
    <scroller>
      <div class="acct-user-wrap">
        <div class="acct-nolog">
          <p class="state">您还未登录</p>
          <div class="btn-entry">
            <router-link to="login"><span class="font-large">登录</span></router-link>
            <span class="split"></span>
            <router-link to="register"><span class="font-large">注册</span></router-link>
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="dashboard-order">
        <ul>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-1"></span>
              <span class="item-title">待支付</span>
            </a>
          </li>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-2"></span>
              <span class="item-title">待发货</span>
            </a>
          </li>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-3"></span>
              <span class="item-title">待收货</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-4"></span>
              <span class="item-title">待评价</span>
            </a>
          </li>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-5"></span>
              <span class="item-title">回复</span>
            </a>
          </li>
          <li>
            <a class="order-a" href="#">
              <span class="item-ico" id="ico-6"></span>
              <span class="item-title">退换货</span>
            </a>
          </li>
        </ul>
      </div>
      <ul class="user-information">
        <li class="user-information-item">
          <a>
            <img src="./ic_1.png" class="item-i">
            <span class="item-title">我的订单</span>
            <span class="arr-r"></span>
          </a>
        </li>
      </ul>
      <ul class="user-information">
        <li class="user-information-item">
          <a>
            <img src="./ic_2.png" class="item-i">
            <span class="item-title">我的优惠卷</span>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_3.png" class="item-i">
            <span class="item-title">现金积分</span>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_4.png" class="item-i">
            <span class="item-title">关于发票</span>
            <span class="arr-r"></span>
          </a>
        </li>
      </ul>
      <ul class="user-information">
        <li class="user-information-item">
          <a>
            <img src="./ic_5.png" class="item-i">
            <router-link to="login">
              <span class="item-title">密码和登录信息</span>
            </router-link>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_6.png" class="item-i">
            <span class="item-title">老会员建议</span>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_7.png" class="item-i">
            <span class="item-title">客户服务</span>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_8.png" class="item-i">
            <span class="item-title">地址管理</span>
            <span class="arr-r"></span>
          </a>
        </li>
        <li class="user-information-item">
          <a>
            <img src="./ic_9.png" class="item-i">
            <span class="item-title">手机验证</span>
            <span class="arr-r"></span>
          </a>
        </li>
      </ul>
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
  #usrtcenter
    margin: 4rem 0
  .header
    .header-a
      position: absolute
      top: 0
      right: 4%
      font-size: 1.8rem
      color: #fff
      line-height: 4rem
  ._v-content
    padding-bottom: 8rem
  .acct-user-wrap
    width: 100%
    height: 9rem
    background-image: url("background.png")
    background-size: 100%
    .acct-nolog
      width: 100%
      text-align: center
      padding: .5rem 0 0
      .state
        font-size: 1.6rem
        line-height: 3rem
      .btn-entry
        display: inline-block
        color: #009c42
        height: 3rem
        line-height: 3rem
        font-size: 1.6rem
        background: hsla(0, 0, 100%, .4)
        border: 1px solid #009c42
        border-radius: 1.5rem
        margin: .5rem auto
        padding: 0 10px
        .font-large
          display: inline-block
          padding: 0 10px
          color: #009c42
        .split
          width: 1px
          height: 1.2rem
          display: inline-block
          border-left: 1px solid #009c42

  .dashboard-order
    width: 100%
    border-top: 1px solid #eee
    ul
      width: 100%
      height: 5rem
      background: #fff
      border-bottom: 1px solid #eee
      li
        width: 33%
        height: 2.5rem
        float: left
        line-height: 2.5rem
        margin-top: 1.5rem
        border-right: 1px solid #dedede
        .order-a
          display: block
          text-align: center
          color: #585858
          text-decoration: none
          .item-title
            display: inline-block
            font-size: 1.2rem
            line-height: 2.5rem
            color: #585858
            vertical-align: 56%
            text-decoration: none
          .item-ico
            display: inline-block
            position: relative
            top: -.6rem
            height: 3rem
            width: 3.5rem
            background-repeat: no-repeat
            background-size: 99% 120%
          #ico-1
            background-image: url('01.png')
          #ico-2
            background-image: url('02.png')
          #ico-3
            background-image: url('03.png')
          #ico-4
            background-image: url('04.png')
          #ico-5
            background-image: url('05.png')
          #ico-6
            background-image: url('06.png')
  .user-information
    margin-bottom: 1rem
    .user-information-item
      width: 100%
      height: 5rem
      overflow: hidden
      background: #fff
      border-bottom: 1px solid #eee
      border-top: 1px solid #eee
      a
        width: 100%
        height: 100%
        display: block
        .item-i
          width: 2.5rem
          float: left
          margin: 1.3rem 1.1rem 0
        .item-title
          float: left
          line-height: 5rem
          font-size: 1.4rem
          color: #585858
        .arr-r
          width: 10px
          height: 10px
          float: right
          border-top: 2px solid #bbb
          border-right: 2px solid #bbb
          transform: rotate(45deg)
          margin: 25px 10px 0 0

</style>
