import { userSummonerStore } from '@/stores/summoner';
import { lol } from './index';

const store = userSummonerStore();

/**
 * summoner basic info
 * @param {string} summonerName summoner nick-name
 * @returns summoner data
 */
function userInfo(summonerName) {
	return lol.get(
		`summoner/v4/summoners/by-name/${summonerName}?api_key=${store.key}`,
	);
}

export { userInfo };
