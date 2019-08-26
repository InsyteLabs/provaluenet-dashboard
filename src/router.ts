'use strict';

import Vue    from 'vue';
import Router from 'vue-router';

import Home         from '@/views/Home.vue';
import TicketList   from '@/views/TicketList.vue';
import TicketDetail from '@/views/TicketDetail.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tickets',
            name: 'tickets',
            component: TicketList
        },
        {
            path: '/ticket/:id',
            name: 'ticket-detail',
            component: TicketDetail
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
