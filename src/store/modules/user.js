import {login} from "../../api/user";
import {getToken, setToken,removeToken} from "../../utils/auth";
import router from "@/router";

const state = {
    token: getToken(),
    name: '',
    introduction: '',
    roles: []
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}
const actions = {
    login({commit}, userInfo) {
        const {username, password} = userInfo
        //console.log(username,password)
        return new Promise((resolve, reject) => {
            const data={username:username,password:password}
            login(data).then(res => {
                console.log(res)
                commit('SET_TOKEN', res.token)
                setToken(res.token)
                resolve(res)
            })
                .catch(error => {
                    reject(error)
                })
        })
    },
    logout({commit}) {
        removeToken()
        commit('SET_TOKEN','')
        return router.replace('/login')
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}