import Vue from 'vue';
import { VueContext } from '../../../dist/vue-context';

new Vue({
    components: {
        VueContext
    },

    data: {
        close: true
    },

    methods: {
        onClick (data) {
            // console.log(data);
        },

        onClose () {
            console.log('closing');
        },

        onOpen (event, data, top, left) {
            console.log(data, top, left);
        }
    },
}).$mount('#app');
