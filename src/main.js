import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("click-outside", {
	bind: function (el, binding, vnode) {
		el.clickOutsideEvent = function (event) {
			// here I check that click was outside the el and his childrens
			if (!(el === event.target || el.contains(event.target))) {
				// and if it did, call method provided in attribute value
				vnode.context[binding.expression](event);
			}
		};
		document.body.addEventListener("click", el.clickOutsideEvent);
	},
	unbind: function (el) {
		document.body.removeEventListener("click", el.clickOutsideEvent);
	}
});

Vue.filter("price", value => {
	let returnValue = Math.round(value * 100) / 100;

	return "$" + returnValue;
});

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
