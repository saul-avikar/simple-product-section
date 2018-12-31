<template>
	<div class="product-page">
		<!--
			Use when using real urls.
			<img class="product-image-container" :src="product.image" :alt="product.name" />
		-->
		<div class="product-image-container">
			<img class="product-image" src="../assets/classic-tee.jpg" :alt="product.name" />
		</div>

		<div class="product-details">
			<div class="product-name">{{ product.name }}</div>
			<div class="product-price">{{ product.price | price }}</div>
			<p class="product-description">{{ product.description }}</p>

			<product-options :options="product.options" />

			<div v-if="error" class="required-error">
				Fields marked * are required.
			</div>

			<div class="add-to-cart" @click="addToCart">ADD TO CART</div>
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

	data: () => ({
		error: null

	}),

	methods: {
		addToCart () {
			this.error = false;

			const options = this.product.options.map(value => {
				if (value.required && !value.selectedValue) {
					this.error = true;
				}

				return {
					name: value.name,
					value: value.selectedValue
				};
			});

			if (!this.error) {
				const product = { ...this.product };

				product.options = options;

				this.$store.commit("addToCart", product);
			}
		}
	},

	components: {
		ProductOptions
	}
};
</script>

<style scoped>
	.product-page {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		width: 100%;
		padding: 0px 200px;
	}

	.product-image-container {
		box-sizing: border-box;
		width: 50%;
		max-height: 500px;
		padding: 20px 20px;
		text-align:center;
	}

	.product-image {
		max-width: 100%;
		max-height: 600px;
	}

	.product-details {
		width: 50%;
	}

	.product-name {
		font-size: 30px;
		padding: 20px 0px;
	}

	.product-price {
		border: 1px solid var(--border-color-secondary);
		border-right: 0px;
		border-left: 0px;

		padding: 5px 0px;
	}

	.product-description {
		color: var(--text-color-secondary);
	}

	.required-error {
		color: var(--text-color-required);
	}

	.add-to-cart {
		border: 2px solid var(--border-color-primary);
		display: inline-block;
		padding: 5px 10px;
		margin-top: 20px;
		font-weight: 600;
		cursor: pointer;
		transition: color 0.2s, background-color 0.2s;
	}

	.add-to-cart:hover {
		background-color: var(--border-color-primary);
		color: white;
	}

	@media screen and (max-width: 1000px) {
		.product-page {
			padding: 0px 20px;
		}

		.product-image-container {
			max-height: 60%;
			padding: 20px 20px;
		}
	}

	@media screen and (max-width: 600px) {
		.product-page {
			padding: 0px 20px;
			padding-bottom: 30px;
			flex-direction: column;
		}

		.product-image-container {
			width: 100%;
			max-width: 100%;
			padding: 20px 20px;
		}

		.product-details {
			width: 100%;
		}
	}
</style>
