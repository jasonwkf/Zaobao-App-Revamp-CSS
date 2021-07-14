moment.updateLocale('en', {
  relativeTime : {
    future: "在%s",
    past:   "%s前",
    s  : '几秒前',
    ss : '%d秒',
    m:  "一分钟",
    mm: "%d分钟",
    h:  "an hour",
    hh: "%d小时",
    d:  "一天",
    dd: "%d天",
    w:  "一周",
    ww: "%d周",
    M:  "一个月",
    MM: "%d月",
    y:  "一年",
    yy: "%d年"
}
});

moment.updateLocale('zh-cn', {
  meridiem : function (hour, minute) {
      if (hour < 13 && minute < 30) {
        return "AM";
      } else {
        return "PM";
      }
  }
});

Vue.filter("moment", function (date) {
  // return moment.unix(date).locale('zh_cn').format('LL h:mm a');
  return moment.unix(date).format('L');
});

Vue.filter("moment-cn", function (date) {
  return moment.unix(date).locale('zh_cn').format('LL h:mm a');
});


Vue.filter("urlScheme", function (url) {
  var newUrl = "tactical://?url=" + url;
  return newUrl;
});

Vue.filter('minutes', (date) => {
  let now = moment().unix()
  let timeDifference = now - date
  if (timeDifference > 43200) {
    return ' '
  } else {
    let getUpdateDate = moment.unix(date).toArray()
    console.log(getUpdateDate, 'getupdate')
    let ago = moment(getUpdateDate).fromNow()
    console.log(ago, 'ago')
    return '• ' + ago
  }
})