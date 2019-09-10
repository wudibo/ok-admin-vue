import cookie from 'js-cookie';

const key = 'token';

let getToken = () => cookie.get(key);

let setToken = (value) => cookie.set(key, value);

let removeToken = () => cookie.remove(key);

export {getToken, setToken, removeToken};
