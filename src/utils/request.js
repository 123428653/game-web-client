import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.method.toLowerCase() === 'get') {
      // 此处config.data设为{}是为了跳过axios源码中删除'Content-Type'属性
      config.data = {}
    }
    config.headers['Content-Type'] = 'application/json'
    // let cookieToken = getToken()
    // if (cookieToken) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['Authorization'] = cookieToken
    // }
    return config
  },
  error => {
    // Toast.fail('' + error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    // NProgress.done()
    // Toast.fail('' + error)
    return Promise.reject(error)
  }
)

export default service
