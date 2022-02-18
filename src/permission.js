import router from "@/router";
import store from "@/store";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken, removeToken} from "@/utils/auth";
import {Message} from "element-ui";

router.beforeEach(async (to, from, next) => {
    Nprogress.start()
    const token=getToken()
    console.log(token)
    if(token){
        console.log(token)
        if(to.path==='/login'){
            next({path:'/'})
            Nprogress.done()
        }
        else{
            try {
                const res=await store.dispatch('user/getInfo')
                if(res)
                    next()
                Nprogress.done()
            }
            catch (error){
                Message.error(error)
                removeToken()
                next('/login')
                Nprogress.done()
            }
        }
    }
    else{
        if(to.path==='/login'||to.path==='/register')
            next()
        else{
            Message.error('请先登录')
            next('/login')
        }
        Nprogress.done()
    }
})