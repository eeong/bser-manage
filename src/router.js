import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import SearchId from './views/SearchId.vue';
import Recs from './views/Recs.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import Rank from './views/Rank.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/search/:userid',
      name: 'searchId',
      component: SearchId,
    },
    {
      path: '/recs',
      name: 'recs',
      component: Recs
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/recs/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/recs/:id/edit',
      name: 'edit',
      component: Edit
    },
    
    {
      path: '/rank/:userid',
      name: 'rank',
      component: Rank
    },
    {
      path:'/:pathMatch(.*)*',
      name:'notFound',
      component: {
        template: '<h1>Page Not Found</h1>'
      }
    }
  ]
});