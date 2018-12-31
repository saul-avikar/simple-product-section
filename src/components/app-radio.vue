<template>
	<label class="radio-label">
		{{ value }}
		<input
			type="radio"
			:name="name"
			:value="value"
			class="radio-input"
			@input="radioChanged"
		/>
	</label>
</template>

<script>
export default {
	data: () => ({
		selected: false
	}),

	methods: {
		radioChanged (input) {
			this.$emit("selected", this.value);
		}
	},

	props: {
		name: {
			type: String,
			required: true
		},

		value: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
	.radio-input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.radio-label {
		display: inline-block;
		cursor: pointer;

		text-align: center;
		color: var(--text-color-secondary);

		border: 1px solid var(--border-color-secondary);
		/* 1px extra padding so it remains the same size when border is added */
		padding: 11px;
		margin: 5px 10px 5px 0px;

		width: 20px;
		height: 20px;
	}

	.radio-label-selected {
		color: var(--text-color-primary);
		border: 2px solid var(--border-color-primary);
		/* Remove the extra padding */
		padding: 10px;
	}
</style>
