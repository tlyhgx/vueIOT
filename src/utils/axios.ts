
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VUE_APP_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 在这里可以做一些请求前的操作
    // 比如，如果有token，可以在这里设置headers
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export default service
