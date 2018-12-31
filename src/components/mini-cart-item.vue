<template>
	<div class="mini-cart-item">
		<img  class="mini-cart-image" :src="item.src" :alt="item.name" />
		<div class="mini-cart-property">{{ item.name }}</div>
		<div class="mini-cart-property">
			{{ item.quantity }} x <span class="item-price">{{ item.price | price }}</span>
		</div>

		<div class="mini-cart-property">
			<div v-for="(option, index) in item.options" :key="index">
				{{ option.name }}: {{ option.value }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			required: true,
			type: Object
		}
	}
};
</script>

<style scoped>
	.mini-cart-item {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
		height: 100px;
	}

	.mini-cart-image {
		height: 100%;
		width: 33%;
	}

	.mini-cart-property {
		width: 65%;
		padding: 5px;
	}

	.item-price {
		font-weight: 600;
	}
</style>
