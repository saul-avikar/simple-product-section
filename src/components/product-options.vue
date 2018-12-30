<template>
	<div>
		product options {{ options }}
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true
		}
	}
};
</script>
