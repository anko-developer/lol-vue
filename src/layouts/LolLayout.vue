<template>
	<LolHeader />
	<LolView>
		<slot></slot>
	</LolView>
</template>

<script setup>
import LolHeader from '@/layouts/LolHeader.vue';
import LolView from '@/layouts/LolView.vue';
</script>

<style lang="scss" scoped></style>
