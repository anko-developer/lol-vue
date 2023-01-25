import { userSummonerStore } from '@/stores/summoner';
import { lol } from './index';

const store = userSummonerStore();

/**
 * summoner league info
 * @param {string} id summoner id
 * @returns summoner league data
 */
function userLeague(id) {
	return lol.get(`league/v4/entries/by-summoner/${id}?api_key=${store.key}`);
}

export { userLeague };
