import { mwgg } from './index';

function getName(summonerName) {
	return mwgg.get(
		`summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-b56abfc9-1c4e-460e-af44-ebb9a3fba21b`,
	);
}

export { getName };
