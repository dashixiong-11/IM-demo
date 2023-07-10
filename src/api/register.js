import { request } from "../utils/request";

export const register = (data) => {
    return request('/account/login', JSON.stringify(data))
}
