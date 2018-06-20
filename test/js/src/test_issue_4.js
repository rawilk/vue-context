import Vue from 'vue';
import { VueContext } from '../../../dist/vue-context';

new Vue({
    components: {
        VueContext
    },

    data: {
        items: []
    },

    mounted () {
        for (let i = 0; i < 30; i++) {
            this.items.push(`Row ${i + 1}`);
        }
    },

    methods: {
        onClick (data) {
            alert(data);
        },
    },
}).$mount('#app');