
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Service from '../views/Service.vue';
import Team from '../views/Team.vue';


const routes = [
    {
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/by-about/:about?',
            name: 'byAbout',
            component: About,
        },
        {
            path: '/by-contact/:contact?',
            name: 'byContact',
            component: Contact,
        },
        {
            path: '/by-project/:project?',
            name: 'byProject',
            component: Project,
        },
        {
            path: '/by-service/:service?',
            name: 'byService',
            component: Service,
        },
        {
            path: '/by-team/:team?',
            name: 'byTeam',
            component: Team,
        },
      ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;