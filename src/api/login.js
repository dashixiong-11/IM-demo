import { request } from "../utils/request";

export const login = (data) => {
    return request('/account/login', JSON.stringify(data))
}