export default {
  pages: [
    'pages/home/index',
    'pages/member/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333',
    selectedColor: '#999',
    backgroundColor: '#fff',
    borderStyle: 'black',
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/member/index',
        text: '我的'
      }
    ]
  }
}
