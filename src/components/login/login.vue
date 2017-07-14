<template>
  <div id="loginBg">
    <div class="acct-wrap" v-show="!showOn">
      <div class="old_user_login">
        <router-link to="usercenter">
          <div class="acct_top_back"></div>
        </router-link>
        <img src="./bg-head.png" class="acct_top_show">
      </div>
      <div class="bg-wrap">
        <div class="login_content">
          <h1>老用户登录</h1>
          <div class="login_content-wrap">
            <div v-show="isShow">
              <form id="reset-form">
                <ul class="fm_list">
                  <li class="multi">
                    <input required="required" type="tel" maxlength="11" placeholder="请输入手机号" class="field_ipt">
                    <a class="fidld_skip">获取验证码</a>
                  </li>
                  <li>
                    <input required="required" type="text" maxlength="10" id="loginVerifyCode" placeholder="请输入手机验证码"
                           class="field_ipt">
                  </li>
                </ul>
                <div class="set_link">
                  <p class="problem_contact_service">遇到问题？请 <a href="javascript:;" class="tel">联系客服</a></p>
                  <span class="set_link-span" @click="telToLogin">账号密码登录</span><b class="back"></b>
                </div>
              </form>
            </div>
            <div v-show="!isShow">
              <form id="login-form">
                <ul class="fm_list">
                  <li>
                    <input type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
                  </li>
                  <li class="multi">
                    <input type="password" maxlength="20" placeholder="请输入登录密码" required="required" class="field_ipt">
                    <a class="fidld_skip" @click="toAcct">忘记密码</a>
                  </li>
                </ul>
                <div id="setting" class="set_link">
                  <a href="javascript:;">
                    <span class="set_link-span" @click="telToLogin">手机号快捷登录</span>
                    <b class="back"></b>
                  </a>
                </div>
              </form>
            </div>
            <form>
              <input type="button" value="登录" class="btn_login">
              <router-link to="register">
                <input type="button" value="注册" class="btn_regisiter">
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="forgot_password" v-show="showOn">
      <div class="forgot_password_content">
        <div class="find_password">
          <span class="acct_top_back" @click="toAcct"></span>
          <h1 id="find">找回密码</h1>
        </div>
        <div class="password_wrap">
          <div class="login_content">
            <form novalidate="novalidate">
              <ul>
                <li class="fm_list">
                  <input type="tel" name="mobile" required="required" maxlength="11" placeholder="请输入您的注册手机号码" class="field_ipt">
                </li>
                <li class="fm_list">
                  <input required="required" type="text" id="resetPwd" maxlength="20" placeholder="请设置6-20位密码,包含字母,数字或符号" class="field_ipt">
                </li>
                <li class="fm_list">
                  <input required="required" type="text" maxlength="10" id="resetCaptcha" placeholder="请输入图形验证码" class="field_ipt">
                </li>
                <li class="fm_list">
                  <input required="required" type="text" maxlength="10" id="resetSmsCode" placeholder="请输入手机验证码" class="field_ipt">
                  <a class="fidld_skip">获取验证码</a>
                </li>
              </ul>
              <input type="button" value="完成" class="space">
              <div class="conv_entry">
                <a href="javascript:;" @click="toAcct">重新登录</a>
                <span class="split"></span>
                <router-link to="register">
                  <a href="javascript:;">注册新会员</a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p class="forgot_password_bottom">
        遇到问题？ 请 <a href="javascript:;" class="tel">联系客服</a>
      </p>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showOn: false,
        isShow: false
      }
    },
    methods: {
      telToLogin () {
        this.isShow = !this.isShow
      },
      toAcct () {
        this.showOn = !this.showOn
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #loginBg
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    height: 100%
    color: #2e2e2e
    overflow: hidden
    z-index: 2
    .acct-wrap
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
          h1
            width: 100%
            height: 84px
            line-height: 70px
            text-align: center
            color: #037049
            font-size: 20px
            box-sizing: border-box
          .login_content-wrap
            .fm_list
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
              .problem_contact_service
                float: left
                color: #666
                font-size: 15px
                line-height: 20px
                .tel
                  color: #3ea438
                  text-decoration: underline
                  letter-spacing: 1px
                  margin: 0 0 40px
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
    .forgot_password
      position: relative
      width: 100%
      height: 100%
      background: #fff
      .forgot_password_content
        .find_password
          width: 100%
          height: 63px
          background: #89BE48
          #find
            width: 100%
            height: 63px
            line-height: 63px
            text-align: center
            font-size: 20px
            color: #fff
            box-sizing: border-box
          .acct_top_back
            position: absolute
            top: 20px
            left: 15px
            width: 72px
            height: 36px
            display: block
          .acct_top_back:after
            content: ''
            position: absolute
            top: 5px
            left: 10px
            width: 12px
            height: 12px
            display: block
            border-top: 2px solid #fff
            border-left: 2px solid #fff
            transform: rotate(-45deg)
        .password_wrap
          width: 100%
          .login_content
            width: 100%
            margin-top: 44px
            .fm_list
              position: relative
              width: 90%
              margin: 0 auto
              height: 50px
              border-bottom: 1px solid #dbdbdb
              overflow: hidden
              .field_ipt
                width: 100%
                height: 100%
                font-size: 16px
                font-family: Microsoft YaHei
              .fidld_skip
                position: absolute
                top: 10px
                right: 0
                /*float: right
                margin-top: 10px*/
                line-height: 21px
                font-size: 16px
                color: #3aad36
                text-decoration: none
                border: 1px solid #3aad36
                border-radius: 4px
                padding: 4px 15px
                text-align: center
            .space
              width: 80%
              display: block
              outline: none
              text-align: center
              font-size: 19px
              color: #fff
              line-height: 36px
              letter-spacing: 20px
              text-indent: 20px
              background-color: #3aad36
              border: 1px solid #3aad36
              border-radius: 5px
              margin: 36px auto 15px
            .conv_entry
              width: 92%
              text-align: center
              font-size: 16px
              color: #666
              line-height: 40px
              margin: 0 auto
              padding-bottom: 15px
              a
                color: #666
                text-decoration: none
              .split
                width: 1px
                vertical-align: middle
                height: 16px
                border-left: 1px solid #999
                display: inline-block
                margin: 0 25px
      .forgot_password_bottom
        position: absolute
        left: 0
        bottom: 15px
        width: 100%
        font-size: 14px
        text-align: center
        color: #666
        .tel
          color: #3ea438
          text-decoration: underline
</style>
