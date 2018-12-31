import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [
			{
				name: "Classic Tee",
				price: 75,
				id: 0,
				image: "./assets/classic-tee.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				options: [
					{
						name: "SIZE",
						required: true,
						choices: ["S", "M", "L"]
					}
				]
			}
		],

		cart: []
	},
	actions: {
	},
	mutations: {
		addToCart (state, product) {
			let alreadyInCart = false;

			state.cart.forEach(item => {
				// Check ids
				if (item.id === product.id) {
					var hasSameOptions = true;

					item.options.forEach((option, index) => {
						// Check if they have the same options
						if (option.value !== product.options[index].value) {
							hasSameOptions = false;
						}
					});

					if (hasSameOptions) {
						alreadyInCart = true;
						item.quantity++;
					}
				}
			});

			if (!alreadyInCart) {
				product.quantity = 1;
				state.cart.push(product);
			}
		}
	}
});
