import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("price", value => {
	let returnValue = Math.round(value * 100) / 100;

	return "$" + returnValue.toFixed(2);
});

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
