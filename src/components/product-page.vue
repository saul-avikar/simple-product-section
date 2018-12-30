<template>
	<div>
		<img :src="product.image" :alt="product.name" />

		<h2>{{ product.name }}</h2>
		<h2>{{ product.price }}</h2>
		<p>{{ product.description }}</p>
		<product-options :options="product.options" />

		<div>
			Add to cart
		</div>
	</div>
</template>

<script>
import ProductOptions from "./product-options";

export default {
	props: {
		product: {
			required: true,
			type: Object,
			validator (input) {
				const hasValidName = input.name &&
					(typeof input.name === "string");
				const hasValidDescription = input.description &&
					(typeof input.description === "string");
				const hasValidPrice = input.price &&
					(typeof input.price === "number");
				const hasValidImage = input.image &&
					(typeof input.image === "string");

				return hasValidName && hasValidDescription && hasValidPrice &&
					hasValidImage;
			}
		}
	},

	components: {
		ProductOptions
	}
};
</script>
