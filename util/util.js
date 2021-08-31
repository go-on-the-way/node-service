export function format(date , format){

    let o = {
        "M+" : date.getMonth()+1,
        "d+" : date.getDate(),
        "h+" : date.getHours(),
        "m+" : date.getMinutes(),
        "s+" : date.getSeconds(),
        "q+" : Math.floor((date.getMonth()+3)/3),
        "S" : date.getMilliseconds()
    }

    if(/(y+)/.test(format)){
        format=format.replace(RegExp.$1,(date.getFullYear()+"")
            .substr(4 - RegExp.$1.length));
    }

    for(let k in o){
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1,RegExp.$1.length==1 ?
                o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;

}

export function getNowDateInStr(){
    return format(new Date(),'yyyy-MM-dd hh:mm:ss')
}

//将Unicode转汉字
export function reconvert(str) {
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    return str;
}