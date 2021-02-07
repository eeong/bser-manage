import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import SearchId from './views/SearchId.vue';
import Tasks from './views/Tasks.vue';
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
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: New
    },
    {
      path: '/tasks/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/rank/:userid',
      name: 'rank',
      component: Rank
    },
    
  ]
});