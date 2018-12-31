<template>
	<div>
		<div v-for="option in options" :key="option.name">
			{{ option.name }}
			<template v-for="(choice, index) in option.choices">
				<a-radio
					:name="option.name"
					:value="choice"
					:key="index"
					@selected="selected"
					:class="{'radio-label-selected': choice === selectedValue}"
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

	data: () => ({
		selectedValue: null
	}),

	methods: {
		selected (value) {
			this.selectedValue = value;
		}
	},

	components: {
		ARadio
	}
};
</script>

<style scoped>

</style>
