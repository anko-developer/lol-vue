import { defineStore } from 'pinia';

export const userSummonerStore = defineStore('summoner', {
	state: () => ({
		key: '',
		id: '',
		accountId: '',
		puuid: '',
		nick: '',
		level: '',
	}),
	getters: {},
	actions: {},
});
