export default defineAppConfig({
  pages: [
    'pages/sign_on/sign_on',
    'pages/login/login',
    'pages/message_group/message_group',
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
