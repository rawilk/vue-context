import Vue from 'vue';
import BasicUsage from './basic-usage';

import NestedMenus from './nested-menus';
import CloseOnClick from './close-on-click';
import CloseOnScroll from './close-on-scroll';

new Vue({
    components: {
        BasicUsage,

        NestedMenus,
        CloseOnClick,
        CloseOnScroll,
    },
}).$mount('#app');
