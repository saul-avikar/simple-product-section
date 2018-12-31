<template>
	<div>
		cart-item {{item.name}}
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
