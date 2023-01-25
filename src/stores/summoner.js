import { defineStore } from 'pinia';

export const userSummonerStore = defineStore('summoner', {
	state: () => ({
		key: '',
		nick: '',
		level: '',
	}),
	getters: {},
	actions: {},
});
