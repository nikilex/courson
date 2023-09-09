import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'HomePage',
  component: () => import('../pages/HomePage.vue'),
  meta: {
    layout: 'app',
  },
},
{
  path: '/page/:pageId',
  name: 'EmptyPage',
  props: true,
  component: () => import('../pages/EmptyPage.vue'),
  meta: {
    layout: 'app'
  },
},
{
  path: '*',
  name: 'ErrNotFound',
  component: () => import('../pages/global/ErrNotFound.vue'),
  meta: {
    layout: 'app'
  },
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;