import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import createColaborator from '../views/collaboration/CreateCollaborationApp.vue'
import IndexCollaborator from '../views/collaboration/IndexCollaboratorApp.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: LoginView},
  {path:'/collaborator/',name:'collaborator-index', component: IndexCollaborator},
  {path: '/collaborator/create', name: 'collaborator-create', component: createColaborator},
  {path: '/about', name: 'about', component: AboutView},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
