import { createRouter, createWebHistory } from 'vue-router';
import MwggMain from '@/views/MwggMain.vue';
import MwggDetail from '@/views/MwggDetail.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: MwggMain,
	},
	{
		path: '/detail',
		name: 'Detail',
		component: MwggDetail,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
