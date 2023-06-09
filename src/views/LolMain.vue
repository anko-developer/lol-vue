<template>
	<LolLayout>
		<input
			@focus="move"
			class="form-control"
			type="text"
			placeholder="소환사 검색"
		/>
	</LolLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const move = () => {
	router.push({
		name: 'Detail',
	});
};
</script>

<style lang="scss" scoped>
.form-control {
	padding: 1rem 1rem 1rem 3.4rem;
	font-size: 1.6rem;
	background: url(../assets/images/svg/search.svg) no-repeat left 1rem center;
}
.btn {
	padding: 0 1.6rem;
	font-size: 1.6rem;
}
</style>
