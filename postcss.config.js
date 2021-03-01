module.exports = {
  'plugins': {
    'autoprefixer': {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ie >= 10',  //IE浏览器必须是10版本及以上
        'ff >= 30', //仅新版本用“ff>=30
        '> 1%',//  全球统计有超过1%的使用率使用“>1%”;
        'last 2 versions', // 所有主流浏览器最近2个版本
      ]
    }
  }
}