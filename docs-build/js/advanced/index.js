import Vue from 'vue';
import Advanced1 from './advanced-1';
import Advanced2 from './advanced-2';
import NestedMenus from './nested-menus';

// Need a separate vue app for each of these so we can render the markdown properly.
new Vue({
    components: {
        Advanced1,
    },
}).$mount('#advanced-1-app');

new Vue({
    components: {
        Advanced2,
    },
}).$mount('#advanced-2-app');

new Vue({
    components: {
        NestedMenus,
    },
}).$mount('#nested-app');
