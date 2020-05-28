import Vue from 'vue'
import Vuex from 'vuex'
import {
  registerSendCode,
  register,
  login,
  forgot,
  bindTel,
  telLogin,
  senCodeLogin,
  telCodeLogin
} from '@/apis'
import { sha1 } from '@/utils'
import { setStorage, removeToken } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cssShow: false,
    showLogin: false,
    cssForgotShow: false,
    forgotShow: false,
    _timer: null,
    msg: {
      type: '',
      tip: '',
      showTip: false
    },
    loginTabs: ['Đăng nhập', 'Đăng ký'],
    loginActiveIndex: 0,
    register: {
      email: '',
      code: '',
      password: '',
      time: 30,
      isSendCode: false,
      sendCodeLoading: false,
      isLoading: false
    },
    login: {
      email: '',
      password: '',
      isLoading: false
    },
    forgot: {
      email: '',
      code: '',
      password: '',
      time: 30,
      isSendCode: false,
      sendCodeLoading: false,
      isLoading: false
    }
  },
  getters: {
    msg: state => state.msg,
    cssShow: state => state.cssShow,
    showLogin: state => state.showLogin,
    cssForgotShow: state => state.cssForgotShow,
    loginTabs: state => state.loginTabs,
    loginActiveIndex: state => state.loginActiveIndex,
    forgotShow: state => state.forgotShow,
    register: state => state.register,
    login: state => state.login,
    forgot: state => state.forgot
  },
  mutations: {
    updateTip (state, { tip, showTip, type }) {
      state.msg.tip = tip
      state.msg.type = type
      state.msg.showTip = showTip
      clearTimeout(state._timer)
      state._timer = setTimeout(() => {
        state.msg.showTip = !showTip
      }, 3000)
    },
    updateIsShowTip (state, showTip) {
      state.msg.showTip = showTip
      clearTimeout(state._timer)
    },
    updateloginActiveIndex (state, index) {
      state.loginActiveIndex = index
    },
    updateShowLogin (state, flag) {
      if (flag) {
        state.cssShow = flag
        setTimeout(() => {
          state.showLogin = flag
        }, 100)
      } else {
        state.showLogin = flag
        setTimeout(() => {
          state.cssShow = flag
        }, 300)
      }
    },
    updateShowForgot (state, flag) {
      if (flag) {
        state.cssForgotShow = flag
        setTimeout(() => {
          state.forgotShow = flag
        }, 300)
      } else {
        state.forgotShow = flag
        setTimeout(() => {
          state.cssForgotShow = flag
        }, 300)
      }
    },
    updateLoading (state, { type, status }) {
      state[type].isLoading = status
    },
    updateIsSendCode (state, { type, status }) {
      state[type].isSendCode = status
    },
    updateSendCodeLoading (state, { type, status }) {
      state[type].sendCodeLoading = status
    },
    updateTime (state, { type, time }) {
      state[type].time = time
    },
    clearVals (state, { type, errors }) {
      state[type].email = ''
      state[type].code = ''
      state[type].password = ''
      state[type].isSendCode = false
      state[type].sendCodeLoading = false
      setTimeout(() => {
        errors.forEach(item => {
          item.errors.clear()
        })
      }, 300)
    }
  },
  actions: {
    showTipMsgAction ({ commit }, status) {
      commit('updateIsShowTip', status)
    },
    loginActiveIndexAction ({ commit }, index) {
      commit('updateloginActiveIndex', index)
    },
    showLoginAction ({ commit }, flag) {
      commit('updateShowLogin', flag)
    },
    showForgotAction ({ commit }, flag) {
      commit('updateShowLogin', false)
      commit('updateShowForgot', flag)
    },
    backLoginAction ({ commit }) {
      commit('updateShowForgot', false)
      setTimeout(() => {
        commit('updateShowLogin', true)
      }, 300)
    },
    registerApi ({ state, commit }, { goUser }) {
      const { password, code, email, isLoading } = state.register
      if (isLoading) return
      commit('updateLoading', { type: 'register', status: true })
      register({
        password: sha1(password), // (String)密码
        code, // (String)验证码
        appId: 'zhanyi', // (String)平台发放给cp的appId，如果从cp处登录，那么会返回一个sign，用于cp去验证用户的有效性
        from: 'web', // (String)调用的平台：gi/cp/iossdk/androidsdk/web
        username: email // (String)邮箱
      }).then((res) => {
        commit('updateLoading', { type: 'register', status: false })
        if (res.status !== 200) {
          commit('updateTip', { tip: res.message, showTip: true, type: 'error' })
        } else {
          const { token, tokenExpire, uuid, nickname, avatar, gender } = res.data
          setStorage('Authorization', token, tokenExpire)
          setStorage('userInfo', { uuid, nickname, avatar, gender }, tokenExpire)
          // 跳转~~
          commit('updateShowLogin', false)
          commit('updateloginActiveIndex', 0)
          goUser()
        }
        console.log('注册成功回调')
      })
    },
    loginApi ({ commit, state }, { goUser }) {
      const { password, email, isLoading } = state.login
      if (isLoading) return
      commit('updateLoading', { type: 'login', status: true })
      login({
        type: 4, // (Integer)common：type 1=facebook(firebase的方式)、2=google(firebase的方式)、3=phone(自己开发的)、4=email(自己开发的)、5=随机账号（自己开发的）；
        password: sha1(password), // 密码sha1
        appId: 'zhanyi', // (String)common：平台发放给cp的appId，如果从cp处登录，那么会返回一个sign，用于cp去验证用户的有效性
        from: 'web', // (String)common：gi/cp/iossdk/androidsdk/web
        username: email // (String)email/phone：账号，如果是email登录，这里就是email；如果是phone登录，这里是
      }).then(res => {
        commit('updateLoading', { type: 'login', status: false })
        if (res.status !== 200) {
          commit('updateTip', { tip: res.message, showTip: true, type: 'error' })
        } else {
          const { token, tokenExpire, uuid, nickname, avatar, gender } = res.data
          setStorage('Authorization', token, tokenExpire)
          setStorage('userInfo', { uuid, nickname, avatar, gender }, tokenExpire)
          // 跳转~~
          commit('updateShowLogin', false)
          goUser()
        }
        console.log('登录成功回调')
      })
    },
    forgotApi ({ commit, state, dispatch }, all) {
      const { password, code, email, isLoading } = state.forgot
      if (isLoading) return
      commit('updateLoading', { type: 'forgot', status: true })
      forgot({
        password: sha1(password), // (String)密码
        code, // (String)验证码
        appId: 'zhanyi', // (String)平台发放给cp的appId，如果从cp处登录，那么会返回一个sign，用于cp去验证用户的有效性
        from: 'web', // (String)调用的平台：gi/cp/iossdk/androidsdk/web
        username: email // (String)邮箱
      }).then(res => {
        commit('updateLoading', { type: 'forgot', status: false })
        if (res.status !== 200) {
          commit('updateTip', { tip: res.message, showTip: true, type: 'error' })
          // alert(res.message)
        } else {
          commit('updateTip', { tip: 'Đặt lại thành công, vui lòng đăng nhập', showTip: true, type: 'success' })
          commit('updateloginActiveIndex', 0)
          console.log('forgotApi', all)
          commit('clearVals', { type: 'forgot', errors: all })
          dispatch('backLoginAction')
        }
        console.log('重置密码回调')
      })
    },
    sendCodeApi ({ commit, state }, { email, type }) {
      if (state[type].sendCodeLoading) return
      commit('updateSendCodeLoading', { type, status: true })
      registerSendCode({
        channel: 'email', // (String)获取code的 渠道。email/phone
        type: type === 'forgot' ? 'reset' : type, // (String)获取code的 用途来下。reset(重置需要的验证码)/register(注册需要的验证码)/login(登录需要的验证码)
        email
      }).then(res => {
        commit('updateSendCodeLoading', { type, status: false })
        if (res.status === 200) {
          let timer = null
          console.log(state[type].time)
          commit('updateIsSendCode', { type, status: true })
          timer = setInterval(function () {
            if (state[type].time > 1) {
              commit('updateTime', { type, time: (--state[type].time) })
            } else {
              clearInterval(timer)
              commit('updateIsSendCode', { type, status: false })
              commit('updateTime', { type, time: 30 })
            }
          }, 1000)
        } else {
          commit('updateTip', { tip: res.message, showTip: true, type: 'error' })
          commit('updateIsSendCode', { type, status: false })
        }
      }).catch(() => {
        commit('updateTip', { tip: 'Lỗi máy chủ', showTip: true, type: 'error' })
        commit('updateSendCodeLoading', { type, status: false })
        commit('updateIsSendCode', { type, status: false })
      })
    },
    bindTelApi () {
      bindTel({
        phone: '13510162725', // (String)电话号码，如果channel是email，那么为空，不能包含区号(diaCode)
        channel: 'phone', // (String)获取code的 渠道。email/phone
        diaCode: '86', // (String)区号，如果是email，那么为空;86或者+86都可以
        type: 'bind' // (String)获取code的 用途来下。reset(重置需要的验证码)/register(注册需要的验证码)/loginAndRegister(登录或注册需要的验证码)/bind(绑定需要的验证码)/unbind(解绑需要的验证码)
      }).then(() => {
        console.log('绑定手机号码成功回调')
      })
    },
    telLoginApi () {
      telLogin({
        type: 3, // (Integer)common：type 1=facebook(firebase的方式)、2=google(firebase的方式)、3=phone(自己开发的)、4=email(自己开发的)、5=随机账号（自己开发的）；
        password: '7c4a8d09ca3762af61e59520943dc26494f8941b', // (String)common：如果是facebook或者google，那么是firebase uid；如果是email，不能为空；如果是phone，可以是空；web
        appId: 'zhanyi', // (String)common：平台发放给cp的appId，如果从cp处登录，那么会返回一个sign，用于cp去验证用户的有效性
        from: 'web', // (String)common：gi/cp/iossdk/androidsdk/web
        diaCode: '86', // (String)phone：区号，电话登录时需要
        username: '13510162725' // (String)email/phone：账号，如果是email登录，这里就是email；如果是phone登录，这里是13510160001,不含diancode
      }).then(() => {
        console.log('绑定手机号码成功回调')
      })
    },
    telCodeLoginApi () {
      telCodeLogin({
        code: '827725', // (String)email/phone：验证码;
        type: 3, // (Integer)common：type 1=facebook(firebase的方式)、2=google(firebase的方式)、3=phone(自己开发的)、4=email(自己开发的)、5=随机账号（自己开发的）；
        appId: 'zhanyi', // (String)common：平台发放给cp的appId，如果从cp处登录，那么会返回一个sign，用于cp去验证用户的有效性
        from: 'web', // (String)common：gi/cp/iossdk/androidsdk/web
        diaCode: '86', // (String)phone：区号，电话登录时需要
        username: '13510162725' // (String)email/phone：账号，如果是email登录，这里就是email；如果是phone登录，这里是13510160001,不含diancode
      }).then(() => {
        console.log('绑定手机号码成功回调')
      })
    },
    senCodeLoginApi () {
      senCodeLogin({
        phone: '13510162725', // (String)电话号码，如果channel是email，那么为空，不能包含区号(diaCode)
        channel: 'phone', // (String)获取code的 渠道。email/phone
        diaCode: '86', // (String)区号，如果是email，那么为空;86或者+86都可以
        type: 'loginAndRegister', // (String)获取code的 用途来下。reset(重置需要的验证码)/register(注册需要的验证码)/loginAndRegister(登录或注册需要的验证码)/bind(绑定需要的验证码)/unbind(解绑需要的验证码)
        email: null // 电话号码，如果channel是phone，那么为空
      }).then(() => {
        console.log('绑定手机号码成功回调')
      })
    },
    sendCodeAcstion ({ dispatch }, { vlidateEmail, email, type }) {
      vlidateEmail().then(status => {
        if (!status) {
          return
        }
        dispatch('sendCodeApi', { email, type })
      })
    },
    registerAction ({ dispatch }, { all, goUser }) {
      Promise.all(all).then(result => {
        // 有一个组件未通过，就提示错误信息
        if (result.indexOf(false) > -1) {
          return
        }
        dispatch('registerApi', { goUser })
      })
    },
    loginAction ({ dispatch }, { all, goUser }) {
      console.log(11)
      Promise.all(all).then(result => {
        // 有一个组件未通过，就提示错误信息
        if (result.indexOf(false) > -1) {
          return
        }
        dispatch('loginApi', { goUser })
      })
    },
    forgotAction ({ dispatch }, all) {
      const emailValidtor = all[0].vlidate()
      const codeValidtor = all[1].vlidate()
      const passwordValidtor = all[2].vlidate()
      Promise.all([emailValidtor, codeValidtor, passwordValidtor]).then(result => {
        // 有一个组件未通过，就提示错误信息
        if (result.indexOf(false) > -1) {
          return
        }
        dispatch('forgotApi', all)
      })
    },
    logoutAction () {
      removeToken()
    }
  }
})
