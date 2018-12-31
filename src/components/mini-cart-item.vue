<template>
	<div class="mini-cart-item">
		<img :src="item.src" :alt="item.name" />
		<span>{{ item.name }}</span>
		<span>{{ item.price }}</span>
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

</style>
