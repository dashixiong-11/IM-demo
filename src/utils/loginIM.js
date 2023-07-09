import { OpenIMSDK } from 'open-im-sdk'
const openIM = new OpenIMSDK();

const loginIM = ({userID,token}) => {
  const config = {
    userID ,
    token,
    url: "ws://121.5.182.23:10003",
    platformID: 5,
  };
  openIM.login(config).then(res => {
    console.log("login suc...");
  }).catch(err => {
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
