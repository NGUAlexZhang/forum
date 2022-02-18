import request from "../utils/request";

export const login = data => {
    console.log(data)
    return request({
        url: '/tokens',
        method: 'post',
        data: data
    })
}
export const register = data => {
    return request({
        url: '/users',
        method: 'post',
        data: data
    })
}
export const getInfo=()=>{
    return request({
        url:'/self/user',
        method:'get'
    })
}