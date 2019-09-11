function list(method) {
    let res = null;
    switch (method) {
        case 'GET':
            res = [20, 40, 60, 80, 100];
            break;
        default:
            res = null;
    }
    return res;
}

module.exports = list;