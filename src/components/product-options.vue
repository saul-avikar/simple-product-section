<template>
	<div>
		<div v-for="(option, optionIndex) in options" :key="option.name">
			<div class="option-title">
				<span class="option-name">{{ option.name }}</span>
				<span v-if="option.required" class="option-required">* </span>
				<span class="option-selection">{{ option.selectedValue }}</span>
			</div>

			<template v-for="(choice, index) in option.choices">
				<a-radio
					:name="option.name"
					:value="choice"
					:key="index"
					@selected="selected($event, optionIndex)"
					:class="{'radio-label-selected': choice === option.selectedValue}"
				/>
			</template>
		</div>
	</div>
</template>

<script>
import ARadio from "./app-radio";

export default {
	props: {
		options: {
			type: Array,
			required: true
		}
	},

	methods: {
		selected (value, optionIndex) {
			this.$set(this.options[optionIndex], "selectedValue", value);
		}
	},

	components: {
		ARadio
	}
};
</script>

<style scoped>
	.option-title {
		padding: 5px 0px;
	}

	.option-name {
		color: var(--text-color-secondary);
	}

	.option-required {
		color: var(--text-color-required);
	}

	.option-selection {
		font-weight: 600;
	}
</style>
