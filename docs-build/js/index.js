import Vue from 'vue';
import BasicUsage from './basic-usage';

import CloseOnClick from './close-on-click';
import CloseOnScroll from './close-on-scroll';

new Vue({
    components: {
        BasicUsage,
        CloseOnClick,
        CloseOnScroll,
    },
}).$mount('#app');
