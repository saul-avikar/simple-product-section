import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [
			{
				name: "Classic Tee",
				price: 75,
				image: "./assets/classic-tee.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				options: [
					{
						name: "SIZE",
						required: true,
						options: ["S", "M", "L"]
					}
				]
			}
		],

		cart: [

		]
	},
	mutations: {

	},
	actions: {

	}
});
