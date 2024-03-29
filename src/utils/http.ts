/**
 * @author ok-admin-vue
 * @description http通用请求工具类
 */

import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import axios from 'axios'

interface Data {
  [key: string]: unknown
}
/** 请求域名地址 */
axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL + ''
/** 默认请求头信息 */
axios.defaults.headers.head['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.head['author'] = 'test-hello-token'
console.log(import.meta.env)
/**
 * 请求超时的等待时间,覆写库的超时默认值
 * 现在，在超时前，所有请求都会等待 5 秒
 */
axios.defaults.timeout = 5000

/** 全局请求拦截器 */
axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么 可更改请求的配置，比如在headers添加通用的token
    if (config.headers) {
      config.headers['Authorization'] = 'ok-admin-vue' //设置token
    }
    return config
  },
  function (error: InternalAxiosRequestConfig) {
    console.log(error, 'error-InternalAxiosRequestConfig')
    // 对请求错误做些什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    return Promise.resolve({
      code: 500,
      message: '访问出现错误',
      error
    })
  }
)

/** 全局响应拦截器 */
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // 对响应数据做点什么 可指定返回的内容
    let data: any = {}
    if (response.data) {
      data = response.data
    } else {
      data = { code: 404, message: '无任何内容' }
    }
    return data
  },
  function (error: AxiosError) {
    // 对响应错误做点什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    return Promise.resolve({
      code: 500,
      message: '服务器发生错误',
      error
    })
  }
)

/** 请求需要包装成data的请求方法 */
const requestData: Array<AxiosRequestConfig['method']> = ['POST', 'PUT', 'PATCH']

/** @description http请求对象 */
const http = {
  _requestHandler<T>(
    method: AxiosRequestConfig['method'] = 'GET',
    url = '',
    data?: Data,
    config?: Data
  ) {
    data = data || {}
    config = config || {}
    method = method.toLocaleUpperCase() as AxiosRequestConfig['method']
    if (requestData.includes(method)) {
      config.data = data
    } else {
      config.params = data
    }
    return axios.request<T>({
      ...config,
      method: method,
      url
    })
  },
  get<T>(url = '', data?: Data, config?: Data) {
    return http._requestHandler<T>('GET', url, data, config)
  },
  post<T>(url = '', data?: Data, config?: Data) {
    return http._requestHandler<T>('POST', url, data, config)
  },
  delete<T>(url = '', data?: Data, config?: Data) {
    return http._requestHandler<T>('DELETE', url, data, config)
  },
  put<T>(url = '', data?: Data, config?: Data) {
    return http._requestHandler<T>('PUT', url, data, config)
  },
  patch<T>(url = '', data?: Data, config?: Data) {
    return http._requestHandler<T>('PATCH', url, data, config)
  },
  request: axios.request
}

export default http
