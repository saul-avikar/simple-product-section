<template>
	<header class="header">
		<nav class="nav-bar">
			<a-nav-link class="nav-cart" @click="">My Cart</a-nav-link>
		</nav>
	</header>
</template>

<script>
import MiniCart from "./mini-cart";
import ANavLink from "./app-nav-link";

export default {
	components: {
		MiniCart,
		ANavLink
	}
};
</script>

<style scoped>
	.header {
		background-color: #F6F6F7;
		padding: 0px 10%;
	}

	.nav-bar {
		display: flex;
	}

	.nav-cart {
		margin-left: auto;
	}
</style>
