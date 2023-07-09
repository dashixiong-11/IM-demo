import Taro from "@tarojs/taro"
const baseUrl = 'http://121.5.182.23:10008'
export const request = (path, data, method) => {
    return new Promise((resolve, reject) => {
        Taro.request({
            url: baseUrl  + path, //仅为示例，并非真实的接口地址
            method: method || 'POST',
            data: data || {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                resolve(res.data)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}