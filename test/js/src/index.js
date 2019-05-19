import Vue from 'vue';
import { VueContext } from '../../../src/js/index';
// import { VueContext } from '../../../dist/js/vue-context';

new Vue({
    components: {
        VueContext
    },

    data: {
        close: true,
        items: [
            'Cras justo odio',
            'Dapibus ac facilisis in',
            'Morbi leo risus',
            'Porta ac consectetur ac',
            'Vestibulum at eros'
        ]
    },

    methods: {
        onClick (text) {
            alert(text);
        },
    },
}).$mount('#app');
