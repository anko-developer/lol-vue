<template>
	<LolLayout>
		<form @submit.prevent="getInfo(summonerName)">
			<div class="row g-0">
				<input
					class="col-12 form-control mb-2"
					type="text"
					v-model="apiKey"
					placeholder="API KEY를 입력해주세요."
				/>
				<input
					class="col form-control me-1"
					type="text"
					v-model="summonerName"
				/>
				<button class="col-auto btn btn-dark" type="submit">검색</button>
			</div>
		</form>
		<p>닉네임: {{ nick }}</p>
		<p>레벨: {{ level }}</p>
	</LolLayout>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { userInfo } from '@/api/summoner';
import { userSummonerStore } from '@/stores/summoner';

const summonerName = ref('');
const apiKey = ref('');
const router = useRouter();
const store = userSummonerStore();
const { key, id, accountId, puuid, nick, level } = storeToRefs(store);

const getInfo = async name => {
	try {
		key.value = apiKey.value;
		apiKey.value = '';

		const { data } = await userInfo(name ? name : '빅웨이브');
		id.value = data.id;
		accountId.value = data.accountId;
		puuid.value = data.puuid;
		nick.value = data.name;
		level.value = data.summonerLevel;
		summonerName.value = '';
		// router.push({
		// 	name: 'Detail',
		// });
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
</script>

<style lang="scss" scoped>
.form-control {
	padding: 1rem;
	font-size: 1.6rem;
}
.btn {
	padding: 0 1.6rem;
	font-size: 1.6rem;
}
</style>
