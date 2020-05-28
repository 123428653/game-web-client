<style lang="scss" scoped>
    .userPage {
        max-width: 840px;
        margin: 0 auto;
        a {
            color: #333;
        }
        .router-link-exact-active {
            color: #e5004f;
        }
    }
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 25px;
        .topUser {
            span {
                padding-right: 24px;
                color: #e5004f;
                font-size: 14px;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    right: 12px;
                    height: 80%;
                    width: 2px;
                    top: 11%;
                    background-color: #999;
                }
            }
            a {
                text-decoration: underline;
            }
        }
    }
    .nav{
        display: flex;
         a{
        height: 90px;
        line-height: 90px;
        padding: 0 15px;
        display: block;
        }
    }
    .main .title {
        height: 82px;
        line-height: 82px;
        background-color: #e5004f;
        color: #fff;
        font-size: 24px;
        padding-left: 40px;
    }
    .conteent {
        border: 1px solid #ddd;
    }
    .userBox {
        display: flex;
        align-items: center;
        padding: 40px;
        .option {
            a {
                color: #e5004f;
            }
            span {
                margin: 0 20px;
            }
        }
    }
    .avatar {
        border-radius: 100%;
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin-right: 20px;
    }
    .nameRight {
        margin: 10px 0;
    }
    .userAuth  {
        padding:0 40px 40px;
        ul {
            border-top: 1px solid #ddd;
        }
        li {
            padding: 30px;
            border: 1px solid #ddd;
            border-top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        p {
            color: #aaa;
            margin-top: 10px;
            font-size: 14px;
        }
    }
    .userAuthInfo {
        display: flex;
        .icon {
            background: url(../assets/images/icon_f.png) no-repeat;
            width: 66px;
            height: 66px;
            margin-right: 22px;
        }
        .iconPhone {
            background-position: left -160px;
        }
        .iconPhoneNot {
            background-position: right -160px;
        }
        .iconEmilNot {
            background-position: right -80px;
        }
        .iconEmil {
            background-position: left -80px;
        }
        h4 {
            font-size: 18px;
            color: #525252;
            font-weight: 700;
            margin-bottom: 3px;
        }
        .checkIcon {
            background: url(../assets/images/icon_s.png) no-repeat;
            background-position: left -40px;
            width: 22px;
            height: 20px;
            display: inline-block;
            vertical-align: text-bottom;
        }
        .wangningIcon {
            background-position: left -20px;
        }
    }
    .contact {
        padding: 0 75px 40px;
        h4 {
            position: relative;
            padding-left: 25px;
            font-size: 18px;
            &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 8px;
                height: 8px;
                border: 3px solid #e5004f;
                border-radius: 10px;
            }
        }
        .tel {
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-top: 10px;
            strong {
                font-size: 22px;
                color: #e5004f;
            }
        }
    }
</style>

<template>
  <div class="userPage">
      <div class="top">
          <div class="nav">
              <router-link to="/">Trang Chủ</router-link>
              <router-link to="/user">Trung tâm cá nhân</router-link>
          </div>
          <div class="topUser">
              <span>xin chào，{{userInfo.nickname}}</span>
              <a href="javascript:;" @click="logout">Đăng xuất</a>
          </div>
      </div>
      <div class="main">
          <div class="title">个人中心</div>
          <div class="conteent">
            <div class="userBox">
                <div class="avatar">
                    <img src="https://i.sdo.com/protected/static/img/account/avatar.jpg" alt="">
                </div>
                <div class="userInfo">
                    <div>
                        <div class="name">
                            <span>账号：</span>
                            <strong>123428653@qq.com</strong>
                        </div>
                        <div class="nameRight">
                            <span>余额: xxx</span>
                        </div>
                    </div>
                    <div class="option">
                            <a href="javascript:;">修改密码</a>
                            <span>|</span>
                            <a href="javascript:;">充值</a>
                            <span>|</span>
                            <a href="javascript:;">充值记录</a>
                    </div>
                </div>
            </div>
            <div class="userAuth">
                <ul>
                    <li>
                        <div class="userAuthInfo">
                            <i class="icon iconPhone iconPhoneNot"></i>
                            <div>
                                <h4>认证手机</h4>
                                <div><i class="checkIcon wangningIcon"></i><span>未绑定</span></div>
                                <p>可用于加固账号安全，并获得快速找回密码等功能服务</p>
                            </div>
                        </div>
                        <div class="userAuthInfoOption">
                            <a href="javascript:;">绑定手机</a>
                        </div>
                    </li>
                    <li>
                        <div class="userAuthInfo">
                            <i class="icon iconEmil"></i>
                            <div>
                                <h4>认证邮箱</h4>
                                <div><i class="checkIcon"></i><span>已绑定</span></div>
                                <p>可用于密码找回，资料查询信息</p>
                            </div>
                        </div>
                        <div class="userAuthInfoOption">
                            <!-- <a href="javascript:;">绑定手机</a> -->
                        </div>
                    </li>
                </ul>
            </div>
            <div class="contact">
                <h4>联系客服热线</h4>
                <div class="tel">全国24小时热：<strong>95105222</strong></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getStorage } from '@/utils/storage'
console.log(getStorage('userInfo'))
export default {
  data () {
    return {
      userInfo: getStorage('userInfo')
    }
  },
  methods: {
    ...mapActions(['logoutAction']),
    logout () {
      this.logoutAction()
      this.$router.push('/')
    }
  }
}
</script>
