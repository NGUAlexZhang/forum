import axios from "axios";
import {Message} from "element-ui";
import {getToken} from "@/utils/auth";

const service = axios.create({
    baseURL: 'https://3yya.com/u/13a3daa9198dc45a/bbs/app',
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) config.headers['Authorization'] = token
        return config
    }
    ,
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const {data} = response
        if (data.code) {
            Message.error(data.message)
            return Promise.reject(new Error(data.message))
        } else {
            return data
        }
    },
    error => {
        return Promise.reject(error.response.data.msg)
    }
)
export default service