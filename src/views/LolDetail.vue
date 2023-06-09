<template>
	<section>
		<h1>소환사 정보</h1>

		<p>닉네임: {{ nick }}</p>
		<p>레벨: {{ level }}</p>
	</section>
</template>

<script setup>
import { userSummonerStore } from '@/stores/summoner';
import { userLeague } from '@/api/league';
// import { storeToRefs } from 'pinia';
// const { id } = storeToRefs(store);

const store = userSummonerStore();
const { id, nick, level } = store;
const leagueInfo = async () => {
	try {
		const response = await userLeague(id);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
leagueInfo();
</script>

<style lang="scss" scoped></style>
