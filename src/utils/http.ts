import axios, { AxiosRequestConfig } from 'axios';
import {message} from 'ant-design-vue';
interface Data {
    [key: string]: unknown;
}

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求超时的等待时间,覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 5 秒
axios.defaults.timeout = 5000;

// 全局请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 可更改请求的配置，比如在headers添加通用的token
    config.headers['Authorization'] = 'ok-admin-vue'; //设置token
    return config;
}, function (error) {
    // 对请求错误做些什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    message.error("访问出现错误");
    return Promise.resolve({
        code: 500,
        message: "访问出现错误",
        error,
    });
});

// 全局响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么 可指定返回的内容
    let data: any = {};
    if(response.data){
        data = response.data;
    } else {
        data = {code: 404, message: "无任何内容"};
    }
    return data;
}, function (error) {
    // 对响应错误做点什么 都返回reslove去处理这样做的好处就是不需要再在每个请求里边写cath错误处理的方法了
    // 这里返回的内容可一个自定义通用的处理方式
    message.error("服务器发生错误");
    return Promise.resolve({
        code: 500,
        message: "服务器发生错误",
        error,
    });
});

const isData = ['POST', 'PUT', 'PATCH'];
const http = {
    _requestHandler(method: AxiosRequestConfig['method'] = 'get', url = '', data?: Data, config?: Data) {
        data = data || {};
        config = config || {};
        if (isData.indexOf(method) >= 0) {
            config.data = data;
        } else {
            config.params = data;
        }
        return axios.request({
            ...config,
            method: method,
            url
        });
    },
    get(url = '', data?: Data, config?: Data) {
        return http._requestHandler('get', url, data, config);
    },
    post(url = '', data?: Data, config?: Data) {
        return http._requestHandler('post', url, data, config);
    },
    delete(url = '', data?: Data, config?: Data) {
        return http._requestHandler('delete', url, data, config);
    },
    put(url = '', data?: Data, config?: Data) {
        return http._requestHandler('put', url, data, config);
    },
    patch(url = '', data?: Data, config?: Data) {
        return http._requestHandler('patch', url, data, config);
    },
    request: axios.request
}
export default http;
