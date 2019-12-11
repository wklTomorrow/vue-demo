function cloneObj(obj) {
    if (typeof obj != "object" || obj === null) {
        return obj;
    }
    var newObj = obj.constructor === Array ? [] : {};
    for (var i in obj) {
        newObj[i] = cloneObj(obj[i]);
    }
    return newObj;
}

function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}


function breadcrumbFun(obj) {
    let menus = obj.menus,
        key = obj.key
    let arr = [],
        ss = true
    function getNode(list, id) {
        for (let i = 0; i < list.length; i++) {
            let obj = list[i];
            if (obj.id === id) {
                if (ss) {
                    localStorage.setItem("pathPopstate", obj.name)
                    ss = false
                }
                arr.push(obj.title)
                getNode(menus, obj.pid);
            } else {
                if (obj.children.length > 0) {
                    getNode(obj.children, id);
                }
            }
        }
    }
    getNode(menus, key);
    return arr
}

function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/&nbsp;/ig, '');//去掉&nbsp;
    return str;
}


function debounce(func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

export {
    cloneObj,
    breadcrumbFun,
    parseTime,
    removeHTMLTag,
    debounce
}