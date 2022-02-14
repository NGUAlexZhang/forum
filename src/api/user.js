import request from "../utils/request";

export const login = data => {
    return request({
        url: '/tokens',
        method: 'post',
        data: data
    })
}
export const register = data => {
    //console.log(data)
    return request({
        url: '/users',
        method: 'post',
        data: data
    })
}