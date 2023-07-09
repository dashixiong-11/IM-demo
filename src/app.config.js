export default defineAppConfig({
  pages: [
    'pages/login/login',
    'pages/home/home',
    'pages/mine/mine',
    'pages/index/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
