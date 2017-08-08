import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/Login'
import User from '@/components/user/User'
import Users from '@/components/user/Index'
import UserShow from '@/components/user/Show'
import UserEdit from '@/components/user/Edit'
import Auth from '@/packages/auth/Auth.js'

Vue.use(VueRouter)
Vue.use(Auth)

const router = new VueRouter({
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
            path: '/users',
            title: 'Usuários',
            name: 'user.index',
            component: Users,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user/:id',
            title: 'Usuário',
            name: 'user.show',
            component: UserShow,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user/:id/edit',
            title: 'Usuário Edit',
            name: 'user.edit',
            component: UserEdit,
            meta: {
                requiresAuth: true
            }
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Vue.auth.isAuthenticated()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router