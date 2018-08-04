import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Sponsor from '@/pages/sponsor'
import Join from '@/pages/join'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/join',
            name: 'Join',
            component: Join
        },
        {
            path: '/sponsor',
            name: 'Sponsor',
            component: Sponsor
        },
    ]
})
