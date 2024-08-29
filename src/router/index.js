// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';  // 请根据实际路径调整
import SearchPage from '../components/SearchPage.vue';

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
