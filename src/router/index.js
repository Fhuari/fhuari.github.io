import { createWebHistory , createRouter } from 'vue-router'

import Home from "../views/Home.vue"
import Projects from "../views/Projects.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    }
];
const router = createRouter({
    history: createWebHistory ('myprofile'),
    routes
})
export default router;