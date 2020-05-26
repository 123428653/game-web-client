import http from '@/utils/request'

// 注册发送验证码
export function registerSendCode (data) {
  return http({
    url: '/api/gi/pub/web/code',
    method: 'POST',
    data
  })
}

// 注册
export function register (data) {
  return http({
    url: '/api/gi/pub/web/register',
    method: 'POST',
    data
  })
}

// 登录
export function login (data) {
  return http({
    url: '/api/gi/pub/web/login',
    method: 'POST',
    data
  })
}

// 绑定手机号码
export function bindTel (data) {
  return http({
    url: '/api/gi/pub/web/code',
    method: 'POST',
    data
  })
}

// 手机号码登录
export function telLogin (data) {
  return http({
    url: '/api/gi/pub/web/login',
    method: 'POST',
    data
  })
}

// 发送登录验证码
export function senCodeLogin (data) {
  return http({
    url: '/api/gi/pub/web/code',
    method: 'POST',
    data
  })
}

// 电话验证码登陆
export function telCodeLogin (data) {
  return http({
    url: '/api/gi/pub/web/login',
    method: 'POST',
    data
  })
}
