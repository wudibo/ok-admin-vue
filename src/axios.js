import _axios from 'axios';
import {getToken, removeToken} from '@/utils/cookie';
import {message} from 'ant-design-vue';

const axios = _axios.create({
    // baseURL: 'http://localhost:8000',
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

axios.interceptors.response.use(response => {
    const data = response.data;
    const status = data.status;
    if (status === 1000) {
        return data;
    } else {
        if (status === 2000 || status === 2001 || status === 2002 || status === 2003) {
            message.warning('当前登录状态己失效，请重新登录。');
            removeToken();
            location.reload();
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
