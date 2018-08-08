import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import sponsor_1 from '@/pages/sponsor-1'
import sponsor_2 from '@/pages/sponsor-2'
import sponsor_3 from '@/pages/sponsor-3'
import sponsor_4 from '@/pages/sponsor-4'
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
            path: '/sponsor-1',
            name: 'sponsor_1',
            component: sponsor_1
        },
        {
            path: '/sponsor-2',
            name: 'sponsor_2',
            component: sponsor_2
        },
        {
            path: '/sponsor-3',
            name: 'sponsor_3',
            component: sponsor_3
        },
        {
            path: '/sponsor-4',
            name: 'sponsor_4',
            component: sponsor_4
        },
    ]
})
