import _axios from 'axios';
import {getToken, removeToken} from '@/utils/cookie';
import {message} from 'ant-design-vue';

const axios = _axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5d0ce6bc424f15399a6c2060/ok-admin-vue-v3',
    timeout: 5000
});

axios.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['token'] = getToken();
    }
    return config;
}, error => {
    return Promise.reject(error);
});

/**
 * 0：成功
 * 1001: 用户未登陆
 * 2001: 业务错误
 */
axios.interceptors.response.use(response => {
    const data = response.data;
    const status = data.status;
    if (status === 0) {
        return data;
    } else {
        if (status === 1001) {
            message.warning('用户未登陆');
            removeToken();
            // location.reload();
        } else {
            message.warning(data.msg);
        }
        return Promise.reject(new Error(data.msg));
    }
}, error => {
    message.error(error.message);
    return Promise.reject(error);
});

export default axios;
