export default {
  pages: [
    'pages/home/index',
    'pages/member/index'
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用获取天气信息'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '我就是太阳',
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
        text: '首页',
        iconPath: 'resource/image/home.png',
        selectedIconPath: 'resource/image/home-select.png'
      },
      {
        pagePath: 'pages/member/index',
        text: '我的账户',
        iconPath: 'resource/image/user.png',
        selectedIconPath: 'resource/image/user-select.png'
      }
    ]
  }
}
