<template>
	<div :style="{ width: screenWidth + 'px' }" class="mini-cart">
		<template v-for="(item, index) in cart">
			<mini-cart-item :item="item" :key="index" />
		</template>
		<div class="mini-cart-empty" v-show="isCartEmpty">
			There are no items in your cart.
		</div>
	</div>
</template>

<script>
import MiniCartItem from "./mini-cart-item";

export default {
	computed: {
		cart () {
			return this.$store.state.cart;
		},

		isCartEmpty () {
			return this.cart.length === 0;
		},

		screenWidth () {
			return screen.width - 30;
		}
	},

	components: {
		MiniCartItem
	}
};
</script>

<style scoped>
	.mini-cart {
		box-sizing: border-box;
		position: absolute;
		padding: 0px 20px;
		margin-right: auto;
		max-width: 340px;
		border: 1px solid var(--border-color-secondary);
		background-color: white;
	}

	.mini-cart-empty {
		padding: 20px;
	}

	@media screen and (min-width: 600px) {
		.mini-cart:after {
			position: absolute;
			top: -1px; right: 0px;
			content: '';
			background: #fff;
			width: 123px;
			height: 1px;
		}
	}

	@media screen and (max-width: 600px) {
		.mini-cart:after {
			position: absolute;
			top: -1px; right: 0px;
			content: '';
			background: #fff;
			width: 78px;
			height: 1px;
		}

		.mini-cart {
			max-width: 570px;
		}
	}
</style>
