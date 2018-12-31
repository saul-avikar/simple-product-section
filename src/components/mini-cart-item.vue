<template>
	<div class="mini-cart-item">
		<!--
			Use when using real urls
			<img  class="mini-cart-image" :src="item.src" :alt="item.name" />
		-->
		<img  class="mini-cart-image" src="../assets/classic-tee.jpg" :alt="item.name" />
		<div class="mini-cart-property">{{ item.name }}</div>
		<div class="mini-cart-property">
			{{ item.quantity }} x <span class="item-price">{{ item.price | price }}</span>
		</div>

		<div class="mini-cart-property">
			<template v-for="(option, index) in item.options">
				<span :key="index">
					<span class="mini-cart-option-name">{{ option.name }}:</span> {{ option.value }}
				</span>
			</template>
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
		padding: 20px 0px;
	}

	.mini-cart-image {
		max-width: 33%;
		height: 100%;
	}

	.mini-cart-property {
		width: 65%;
		padding: 5px;
		padding-left: 30px;
	}

	.mini-cart-option-name {
		display: inline-block;
		text-transform: lowercase;
	}

	.mini-cart-option-name:first-letter {
		text-transform: capitalize;
	}

	.item-price {
		font-weight: 600;
	}
</style>
