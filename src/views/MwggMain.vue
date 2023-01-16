<template>
	<form @submit.prevent="myName(summonerName, key)">
		<div class="row">
			<input class="col-12 form-control mb-2" type="text" v-model="key" />
			<input class="col form-control me-1" type="text" v-model="summonerName" />
			<button class="col-auto btn btn-dark" type="submit">검색</button>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { getInfo } from '@/api/summoner';

const summonerName = ref('');
const key = ref('');

const myName = async (name, key) => {
	try {
		const { data } = await getInfo(name, key);
		console.log(data);
		// yourName.value = data.name;
		summonerName.value = '';
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
