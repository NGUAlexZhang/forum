import JsCookie from "js-cookie";

const tokenKey = 'Admin-Token'
export const getToken = () => {
    return JsCookie.get(tokenKey)
}
export const setToken = (token) => {
    return JsCookie.set(tokenKey, token)
}
export const removeToken = () => {
    return JsCookie.remove(tokenKey)
}
export default{
    getToken,
    setToken,
    removeToken
}