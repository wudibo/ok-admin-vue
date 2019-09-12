function userList(method) {
    let response = null;
    switch (method) {
        case 'GET':
            response = {'status': 1000, 'msg': '查询成功', 'data': [{'username': 'admin', 'email': 'admin@qq.com'}, {'username': 'zhangsan', 'email': 'zhangsan@qq.com'}]};
            break;
        default:
            response = null;
    }
    return response;
}

module.exports = userList;
