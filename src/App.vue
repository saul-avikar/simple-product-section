<template>
	<div id="app">
		<main-header />
		<product-page :product="product" />
	</div>
</template>

<script>
import MainHeader from "@/components/main-header";
import ProductPage from "@/components/product-page";

export default {
	computed: {
		product () {
			// For the prototype return the only product in the database.
			return this.$store.state.products[0];
		}
	},

	components: {
		MainHeader,
		ProductPage
	}
};
</script>

<style>
	:root {
		--text-color-primary: #222222;
		--text-color-secondary: #888888;
		--text-color-required: #C90000;

		--border-color-primary: #222222;
		--border-color-secondary: #CCCCCC;
	}

	* {
		/* Main Text Color */
		color: var(--text-color-primary);
	}

	html, body, #app {
		margin: 0px;
	}
</style>
