import Vue from 'vue';
import { VueContext } from '../../../dist/vue-context';

new Vue({
	components: {
		VueContext
	},

	methods: {
		onClick (data) {
			console.log(data);
		},
	},
}).$mount('#app');