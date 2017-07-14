<template>
  <div id="loginBg" class="acct-wrap">
    <div class="old_user_login">
      <router-link to="usercenter"><div class="acct_top_back"></div></router-link>
      <img src="./bg-head.png" class="acct_top_show">
    </div>
    <div class="bg-wrap">
      <div class="login_content">
        <h1 class="register-h1">新用户注册</h1>
        <div class="login_content-wrap">
          <form id="register-form">
            <ul class="fm_list register_distance">
              <li>
                <input id="txtMobile" type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
              </li>
              <li>
                <input type="text" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required" class="field_ipt">
              </li>
              <li>
                <input required="required" type="text" maxlength="10" id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt" style="width: 70%;">
                <div class="verifycode_img"></div>
              </li>
              <li>
                <input type="text" placeholder="请输入手机验证码" maxlength="10" id="regSmsCaptcha" required="required" class="field_ipt">
                <a class="fidld_skip">获取验证码</a>
              </li>
            </ul>
            <p class="register_tel">遇到问题？请 <a class="tel" href="Javascript:;">联系客服</a></p>
            <input type="button" value="注册" class="btn_login space m-top">
            <router-link to="login">
              <input type="button" value="登录" class="btn_regisiter space m-top">
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .acct-wrap
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    color: #2e2e2e
    overflow: hidden
    z-index: 2
    .old_user_login
      position: relative
      width: 100%
      height: 141px
      background: #fff
      .acct_top_back
        width: 26px
        height: 26px
        display: block
        border-radius: 50%
        position: absolute
        left: 15px
        top: 46px
        border: 1px solid #3aad36
      .acct_top_back:after
        content: ""
        width: 14px
        height: 14px
        display: block
        border-left: 1px solid #3aad36
        border-top: 1px solid #3aad36
        position: absolute
        left: 10px
        top: 5px
        transform: rotate(-45deg)
      .acct_top_show
        width: 120px
        position: absolute
        top: 30%
        left: 50%
        margin-left: -60px
        display: block
    .bg-wrap
      height: 526px
      background-image: url('./login-big-bg.jpg')
      background-size: 100%
      background-position: bottom
      .login_content
        width: 100%
        height: 325px
        box-sizing: border-box
        .register-h1
          width: 100%
          height: 52px
          line-height: 70px
          text-align: center
          color: #037049
          font-size: 20px
          box-sizing: border-box
        .login_content-wrap
          .fm_list
            margin-bottom: 10px
            li
              position: relative
              width: 90%
              margin: 0 auto
              height: 50px
              border-bottom: 1px solid #dbdbdb
              .field_ipt
                position: absolute
                top: 0
                left: 0
                width: 100%
                background: transparent
                box-sizing: border-box
                line-height: 52px
                font-size: 16px
                font-family: Microsoft YaHei
              .fidld_skip
                position: absolute
                top: 10px
                right: 0
                display: inline-block
                border: 1px solid #3aad36
                border-radius: 4px
                padding: 6.5px 15px
                text-align: center
                font-size: 16px
                color: #3aad36
                text-decoration: none
          .set_link
            position: relative
            text-align: right
            width: 90%
            height: 21px
            margin: 0 auto
            padding: 9px 0 20px
            font-size: 16px
            .set_link-span
              color: #3aad36
              letter-spacing: 1px
              font-size: 15px
              margin: 0 0 40px
              line-height: 20px
              margin-right: 7px
            .back
              width: 8px
              height: 8px
              border-top: 1px solid
              border-right: 1px solid
              font-weight: 700
              color: #3aad36
              transform: rotate(45deg)
              margin-left: -10px
              display: inline-block
          .btn_login
            width: 80%
            display: block
            outline: none
            text-align: center
            font-size: 19px
            color: #fff
            height: 38px
            line-height: 38px
            letter-spacing: 20px
            text-indent: 20px
            box-sizing: border-box
            margin: 5px auto 15px
            background: #3aad36
            border: 1px solid #3aad36
            border-radius: 5px
          .btn_regisiter
            width: 80%
            display: block
            outline: none
            text-align: center
            font-size: 19px
            color: #fff
            height: 38px
            line-height: 38px
            letter-spacing: 20px
            text-indent: 20px
            box-sizing: border-box
            margin: 10px auto 0
            background: #8a8a8a
            border: 1px solid #8a8a8a
            border-radius: 5px
            opacity: .5
        .register_tel
          font-size: 14px
          color: #666
          text-align: center
          line-height: 21px
          margin-bottom: 5px
          .tel
            color: #3ea438
            text-decoration: underline
</style>
