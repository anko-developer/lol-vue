<template>
	<form @submit.prevent="myName(summonerName)">
		<div class="row">
			<input
				class="col-12 form-control mb-2"
				type="text"
				v-model="apiKey"
				placeholder="API KEY를 입력해주세요."
			/>
			<input class="col form-control me-1" type="text" v-model="summonerName" />
			<button class="col-auto btn btn-dark" type="submit">검색</button>
		</div>
	</form>
	<p>닉네임: {{ nick }}</p>
	<p>레벨: {{ level }}</p>
</template>

<script setup>
import { ref } from 'vue';
import { getInfo } from '@/api/summoner';
import { storeToRefs } from 'pinia';
import { userSummonerStore } from '@/stores/summoner';

const summonerName = ref('');
const apiKey = ref('');
const store = userSummonerStore();
const { key, nick, level } = storeToRefs(store);

const myName = async name => {
	try {
		key.value = apiKey.value;
		apiKey.value = '';

		const { data } = await getInfo(name ? name : '빅웨이브');
		nick.value = data.name;
		level.value = data.summonerLevel;
		summonerName.value = '';
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
</script>

<style lang="scss" scoped>
form {
	padding: 20px;
}
</style>
