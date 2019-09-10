import _axios from 'axios';
import {getToken, removeToken} from '@/utils/cookie';

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

axios.interceptors.response.use(response => {
    const data = response.data;
    const status = data.status;
    // 业务正常
    if (status === 1000) {
        return data;
    } else {
        if (status === 2000 || status === 2001 || status === 2002 || status === 2003) {
            // token错误
            this.$message.warning('当前登录状态己失效，请重新登录。');
            removeToken();
            // location.reload()
        } else {
            // 业务异常
            this.$message.warning(data.msg);
        }
        return Promise.reject(new Error(data.msg));
    }
}, error => {
    // 服务器错误
    this.$message.error(error.message);
    return Promise.reject(error);
});

export default axios;
