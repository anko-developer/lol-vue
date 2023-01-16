import { mwgg } from './index';

/**
 *
 * @param {string} summonerName 소환사 이름
 * @param {string} key API Key
 * @returns 소환사 정보
 */
function getInfo(summonerName, key) {
	return mwgg.get(
		`summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`,
	);
}

export { getInfo };
