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
	data: () => ({
		product: {
			name: "TEST",
			description: "test",
			price: 12,
			image: "./assets/classic-tee.jpg"
		}
	}),

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
</style>
