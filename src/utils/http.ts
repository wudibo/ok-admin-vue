import axios, {AxiosRequestConfig} from 'axios';

interface Data {
    [key: string]: unknown
}

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';



const isData = ['POST', 'PUT', 'PATCH'];
const http = {
    _headerRequest(method: AxiosRequestConfig['method'] = 'get', url = '', data?: Data, config?: Data) {
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
        return http._headerRequest('get', url, data, config);
    },
    post(url = '', data?: Data, config?: Data) {
        return http._headerRequest('post', url, data, config);
    },
    delete(url = '', data?: Data, config?: Data) {
        return http._headerRequest('delete', url, data, config);
    },
    put(url = '', data?: Data, config?: Data) {
        return http._headerRequest('put', url, data, config);
    },
    patch(url = '', data?: Data, config?: Data) {
        return http._headerRequest('patch', url, data, config);
    },
    request: axios.request
}
export default http;
