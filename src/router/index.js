import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/Login'
import User from '@/components/user/User'
import UserShow from '@/components/user/Show'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            title: 'Home',
            name: 'home',
            component: Home
        },
        {
            path: '/user',
            title: 'Usuário',
            name: 'user.create',
            component: User
        },
        {
            path: '/user/:id',
            title: 'Usuário',
            name: 'user.show',
            component: UserShow
        },
        {
            path: '/login',
            title: 'Login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            component: Home
        }
    ]
})