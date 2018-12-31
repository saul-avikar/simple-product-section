<template>
	<header class="header">
		<nav class="nav-bar">
			<div class="dropdown">
				<a-nav-link
					class="nav-cart"
					@click.native="openCart"
					v-click-outside="closeCart"
				>
					My Cart ({{ cartSize }})
				</a-nav-link>
				<mini-cart class="mini-cart" />
			</div>
		</nav>
	</header>
</template>

<script>
import MiniCart from "./mini-cart";
import ANavLink from "./app-nav-link";

export default {
	data: () => ({
		showCart: false
	}),

	methods: {
		openCart () {
			this.showCart = !this.showCart;
		},

		closeCart () {
			this.showCart = false;
		}
	},

	computed: {
		cartSize () {
			let cart = this.$store.state.cart;

			if (cart.length <= 1) {
				return cart.length ? cart[0].quantity : 0;
			}

			let cartTotal = cart.reduce((a, product) => {
				return {
					quantity: a.quantity + product.quantity
				};
			}).quantity;

			return cartTotal;
		}
	},

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
		box-sizing: border-box;
		height: 30px;
		width: 110px;
	}

	.dropdown {
		margin-left: auto;
		position: relative;
		display: inline-block;
	}

	.dropdown:hover > .mini-cart {
		display: block;
	}

	.dropdown:hover > .nav-cart {
		background-color: white;
		color: var(--text-color-primary);
		border: 1px solid var(--border-color-secondary);
		border-bottom: 0px;
	}

	.mini-cart {
		display: none;
		position: absolute;
		z-index: 1;
		right:0;
	}
</style>
