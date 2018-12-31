<template>
	<div class="mini-cart">
		<template v-for="(item, index) in cart">
			<mini-cart-item :item="item" :key="index" />
		</template>
	</div>
</template>

<script>
import MiniCartItem from "./mini-cart-item";

export default {
	computed: {
		cart () {
			return this.$store.state.cart;
		}
	},

	components: {
		MiniCartItem
	}
};
</script>

<style scoped>
	.mini-cart {
		position: absolute;
		padding: 0px 20px;
		margin-right: auto;
		width: 300px;
		border: 1px solid var(--border-color-secondary);
		background-color: white;
	}

	.mini-cart:after {
		position: absolute;
		top: -1px; right: 0px;
		content: '';
		background: #fff;
		width: 108px;
		height: 1px;
	}
</style>
