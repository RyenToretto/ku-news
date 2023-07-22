export function timeInterval(dateBeginStick) {
  const dateEnd = new Date(); // 获取当前时间
  const diffStick = Math.abs(dateEnd.getTime() - dateBeginStick); // 时间差的毫秒数

  const yearDiff = Math.floor(diffStick / (24 * 3600 * 1000*365));
  if (yearDiff !== 0){
    return yearDiff + '年前';
  }

  const dayDiff = Math.floor(diffStick / (24 * 3600 * 1000));  // 计算出相差天数
  if (dayDiff !== 0) {
    return dayDiff + '天前';
  }

  const leave1 = diffStick % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000)) // 计算出小时数
  if (hours !== 0) {
    return hours + '小时前';
  }

  // 计算相差分钟数
  const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000)) // 计算相差分钟数
  if (minutes !== 0) {
    return minutes + '分钟前';
  }

  return '刚刚'
}

export function parseTime(originTime, format = 'yyyy-MM-dd hh:mm:ss') {
  if (!originTime) {
    return originTime
  }
  let dateObj
  if (typeof originTime === 'object') {
    dateObj = originTime
  } else {
    if ((typeof originTime === 'string') && (/^[0-9]+$/.test(originTime))) {
      originTime = parseInt(originTime)
    } else if (typeof originTime === 'string') {
      originTime = originTime
          .replace(new RegExp(/-/gm), '/')
          .replace('T', ' ')
          .replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if ((typeof originTime === 'number') && (originTime.toString().length === 10)) {
      originTime = originTime * 1000
    }
    dateObj = new Date(originTime)
  }
  if (dateObj.toString() === 'Invalid Date') {
    return originTime
  }
  const tMap = {
    y: dateObj.getFullYear(),
    M: dateObj.getMonth() + 1,
    d: dateObj.getDate(),
    h: dateObj.getHours(),
    m: dateObj.getMinutes(),
    s: dateObj.getSeconds(),
    t: dateObj.getDay()
  }
  return format.replace(/(y{1,4}|[Mdhmsa]{1,2})/g, (matchStr, tKey) => {
    let tValue = tMap[tKey[0]]
    if (tKey[0] === 't') { // Note: getDay() returns 0 on Sunday
      return ['日', '一', '二', '三', '四', '五', '六'][tValue]
    }
    if (matchStr.length > 0 && tValue < 10) {
      tValue = '0' + tValue
    }
    return tValue || 0
  })
}
