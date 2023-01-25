import { userSummonerStore } from '@/stores/summoner';
import { lol } from './index';

const store = userSummonerStore();

/**
 * @param {string} summonerName 소환사 이름
 * @param {string} key API Key
 * @returns 소환사 정보
 */
function getInfo(summonerName) {
	return lol.get(
		`summoner/v4/summoners/by-name/${summonerName}?api_key=${store.key}`,
	);
}

export { getInfo };
