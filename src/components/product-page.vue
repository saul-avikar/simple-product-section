<template>
	<div>
		Product
		<product-image />
		<product-details />
	</div>
</template>

<script>
import ProductImage from "./product-image";
import ProductDetails from "./product-details";

export default {
	components: {
		ProductImage,
		ProductDetails
	}
};
</script>
