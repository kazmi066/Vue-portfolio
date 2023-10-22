import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './css/global.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView/HomeView.vue')
    },
    {
      path: '/biography',
      name: 'Biography',
      component: () => import('./views/BiographyView/BiographyView.vue')
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: () => import('./views/HobbiesView/HobbiesView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/ProjectsView/ProjectsView.vue')
    },
    {
      path: '/photography',
      name: 'PhotographyView',
      component: () => import('./views/PhotographyView/PhotographyView.vue')
    },
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
