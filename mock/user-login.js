function userLogin(method) {
    let response = null;
    switch (method) {
        case 'POST':
            response = {'status': 1000, 'msg': '登陆成功', 'data': {'username': 'admin', 'email': 'admin@qq.com'}};
            break;
        default:
            response = null;
    }
    return response;
}

module.exports = userLogin;
