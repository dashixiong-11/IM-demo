import { request } from "../utils/request";

export const login = (data) => {
  return request('/account/login', JSON.stringify(data))
}

export const sendCode = ({phoneNumber }) => {
  return request('/account/code', JSON.stringify({
    areaCode:'86',
    phoneNumber,usedFor:1, operationID: Date.now() + ""
  }))
}

export const verify = ({phoneNumber,verificationCode}) => {
  return request('/account/verify', JSON.stringify({
    areaCode:'86',
    verificationCode,
    phoneNumber,usedFor:1, operationID: Date.now() + ""
  }))
}
