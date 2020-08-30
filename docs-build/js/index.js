import Vue from 'vue';
import BasicUsage from './basic-usage';
import Advanced1 from './advanced-1';
import Advanced2 from './advanced-2';
import NestedMenus from './nested-menus';
import CloseOnClick from './close-on-click';
import CloseOnScroll from './close-on-scroll';

new Vue({
    components: {
        BasicUsage,
        Advanced1,
        Advanced2,
        NestedMenus,
        CloseOnClick,
        CloseOnScroll,
    },
}).$mount('#app');
