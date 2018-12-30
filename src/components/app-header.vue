<template>
	<header class="header">
		Header
		<mini-cart />
	</header>
</template>

<script>
import MiniCart from "./mini-cart";

export default {
	components: {
		MiniCart
	}
};
</script>

<style scoped>
	.header {
		background-color: #F6F6F7;
	}
</style>
