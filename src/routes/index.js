import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('@/views/LolMain.vue'),
	},
	{
		path: '/detail',
		name: 'Detail',
		component: () => import('@/views/LolDetail.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/404Page.vue'),
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
