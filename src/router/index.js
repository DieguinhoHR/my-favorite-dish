import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Register from '@/components/Register'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            title: 'Home',
            component: Home
        },
        {
            path: '/register',
            title: 'Register',
            component: Register
        },
        {
            path: '/login',
            title: 'Login',
            component: Login
        }
    ]
})