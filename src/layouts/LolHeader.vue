<template>
	<header class="header">
		<div class="header__logo">
			<router-link to="/">
				<SvgImage name="logo"></SvgImage>
			</router-link>
		</div>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
	padding: 2rem 1.4rem;
	background-color: var(--lol-gray01);
}

.header__logo {
	a {
		vertical-align: top;
	}

	svg {
		display: block;
		width: 8rem;
		height: 2rem;
		fill: var(--lol-primary);
	}
}
</style>
