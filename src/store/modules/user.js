import {login} from "../../api/user";
import {getToken, setToken} from "../../utils/auth";

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
        return new Promise((resolve, reject) => {
            login({username: username, password: password}).then(res => {
                commit('SET_TOKEN', res.token)
                setToken(res.token)
                resolve(res)
            })
                .catch(error => {
                    reject(error)
                })
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}