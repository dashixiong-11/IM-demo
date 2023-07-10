import Taro from '@tarojs/taro'
import  openIM from './im.js'

const wsurl =  'ws://121.5.182.23:10003'
const wsurl2 =  'ws://192.168.1.3:10003'

const loginIM = ({userID,token}) => {
  const config = {
    userID ,
    token,
    url: wsurl2,
    platformID: 5,
  };
  openIM.login(config).then(res => {
    console.log("login suc...");
      Taro.switchTab({
        url: '/pages/home/home'
      })
  }).catch(err => {
    console.log(err);
    console.log("login failed...1111");
  })
}

const checkLogin = () => {
  openIM.getLoginStatus().then(res => {
    // 101:登录成功 102:登陆中 103:登录失败 201:登出
    console.log('res');
    console.log(res);
  }).catch(err => {
    console.log(err);

  })
}

export { loginIM, openIM, checkLogin }
