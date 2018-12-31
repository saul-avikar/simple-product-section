<template>
	<header class="header">
		<nav class="nav-bar">
			<div class="dropdown">
				<a-nav-link
					class="nav-cart"
				>
					<template v-if="isMobile">
						<i class="material-icons">shopping_cart</i>
						<span>( {{ cartSize }} )</span>
					</template>
					<template v-else>
						My Cart ( {{ cartSize }} )
					</template>
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
		},

		isMobile () {
			return screen.width <= 600;
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
		width: 125px;
		white-space: nowrap;
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

	.nav-cart > * {
		display: table-cell;
		vertical-align: middle;
	}

	@media (max-width: 600px) {
		.header {
			padding: 0px 15px;
		}

		.nav-cart {
			width: 80px;
		}
	}
</style>
