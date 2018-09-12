import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import sponsor_1 from '@/pages/sponsor-1'
import sponsor_2 from '@/pages/sponsor-2'
import sponsor_3 from '@/pages/sponsor-3'
import sponsor_4 from '@/pages/sponsor-4'
import sponsor_5 from '@/pages/sponsor-5'
import sponsor_6 from '@/pages/sponsor-6'
import register from '@/pages/register'
import QA from '@/pages/QA'
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
            path: '/landing',
            name: 'Main',
            component: Main
        },
        {
            path: '/intro',
            name: 'Main',
            component: Main
        },
        {
            path: '/join_info',
            name: 'Main',
            component: Main
        },
        {
            path: '/schedule',
            name: 'Main',
            component: Main
        },
        {
            path: '/staff',
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
        {
            path: '/sponsor-5',
            name: 'sponsor_5',
            component: sponsor_5
        },
        {
            path: '/sponsor-6',
            name: 'sponsor_6',
            component: sponsor_6
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/QA',
            name: 'QA',
            component: QA
        }
    ]
})
