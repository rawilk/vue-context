import Vue from 'vue';
import CloseOnClick from './close-on-click';
import CloseOnScroll from './close-on-scroll';

// Need a separate vue app for each of these so we can render the markdown properly.
new Vue({
    components: {
        CloseOnClick,
    },
}).$mount('#close-on-click-app');

new Vue({
    components: {
        CloseOnScroll,
    },
}).$mount('#close-on-scroll-app');
