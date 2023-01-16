<template>
	<header class="header">
		<div class="header__logo">
			<router-link to="/">
				<SvgImage name="opgglogo" color="#fff"></SvgImage>
			</router-link>
		</div>
	</header>
</template>

<script setup>
import SvgImage from '@/components/SvgImage.vue';
</script>

<style lang="scss" scoped>
.header {
	padding: 10px 14px;
	background-color: #151515;
}

.header__logo {
	width: 100px;

	a {
		// display: block;
		vertical-align: top;
	}

	svg {
		display: block;
		width: 100px;
		height: 50px;
	}
}
</style>
