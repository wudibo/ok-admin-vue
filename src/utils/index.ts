// 判断客户端环境
export const isPCFun = function (): boolean {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 时间戳格式化
/**时间处理*/
export const dateFormat = function (timestamp: number | string | null, format = "YYYY-MM-DD") {
    format = format.replace(/d/gi, 'D');
    const _timestamp = timestamp ? Number(timestamp) : 0;
    if (!isNaN(_timestamp) && _timestamp.toString().length == 10) {
        timestamp = Number(timestamp) * 1000;
    }
    const date = timestamp ? new Date(timestamp) : new Date();

    const o: any = {
        "M+": date.getMonth() + 1,                 //月份
        "D+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return format;
};


/**
 * 节流函数
 * @param cb  执行的回调
 * @param wait      节流毫秒时间默认节流300毫秒触发
 * @returns {function(...[*]=)}
 */
export const throttle = function (cb: Function, wait?: number) {
    let pre = 0;//保留时间戳(毫秒)
    return function () {
        // @ts-ignore
        const context: any = this,
            args = arguments,
            now = Date.now();
        if (pre < 1 || now - pre >= (wait||300)) {
            cb.apply(context, args);
            pre = Date.now();
        }
    }
};

/**
 * 防抖函数
 * @param cb  执行的回调
 * @param wait 防抖毫秒时间 默认防抖300毫秒触发
 * @returns {function(...[*]=)}
 */
export const debounce = function <K>(cb: Function, wait?: number) {
    wait = wait || 300;
    let timer = 0;
    return function () {
        //清除上一次的延时器
        clearTimeout(timer);
        //重新设置新的延时器
        timer = setTimeout(function <T>(args: T) {
            // @ts-ignore
            cb.apply(this, args);
            // @ts-ignore
        }.bind(this, arguments), wait);
    }
};

export default {
    isPCFun,
    throttle,
    debounce,
    dateFormat
};
