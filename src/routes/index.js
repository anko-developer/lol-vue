import { createRouter, createWebHistory } from 'vue-router';
// import MwggMain from '@/views/MwggMain.vue';
// import MwggDetail from '@/views/MwggDetail.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('@/views/MwggMain.vue'),
	},
	{
		path: '/detail',
		name: 'Detail',
		component: () => import('@/views/MwggDetail.vue'),
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
