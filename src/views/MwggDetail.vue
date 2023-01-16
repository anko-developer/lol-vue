<template>
	<form @submit.prevent="myName(summonerName)">
		<div class="row">
			<input class="col form-control me-1" type="text" v-model="summonerName" />
			<button class="col-auto btn btn-primary" type="submit">상세보기</button>
		</div>
		<div>검색 소환사명: {{ yourName }}</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { getInfo } from '@/api/summoner';

const summonerName = ref('');
const yourName = ref('');

const myName = async name => {
	try {
		// const response = await getName(name);
		const { data } = await getInfo(name);
		console.log(data);
		yourName.value = data.name;
		summonerName.value = '';
	} catch (error) {
		console.log(error);
	}
};
</script>

<style lang="scss" scoped></style>
