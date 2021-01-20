import axios, {AxiosRequestConfig} from 'axios';

interface Data {
    [key: string]: unknown
}

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';



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
