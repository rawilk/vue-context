<template>
    <div class="mt-4">
        <div class="mb-4">
            <div class="flex items-center">
                <input id="toggle-close"
                       type="checkbox"
                       class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                       v-model="closeOnClick"
                >
                <label for="toggle-close" class="ml-2 block text-sm leading-5 text-gray-900">
                    Close on Click
                </label>
            </div>
        </div>

        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="demo">
                <li>
                    <a href="#"
                       class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                       :class="{ 'border-t border-gray-200': index > 0 }"
                       v-for="(item, index) in items"
                       :key="index"
                       @contextmenu.prevent="$refs.menu.open"
                    >
                        <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="text-sm leading-5 font-medium text-gray-600 truncate" v-text="item"></div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <vue-context ref="menu" :close-on-click="closeOnClick">
            <li>
                <a>
                    {{ closeOnClick ? 'I will close on click' : 'I will stay open on click' }}
                </a>
            </li>
        </vue-context>
    </div>
</template>

<script>
import VueContext from 'vue-context';
import 'vue-context/src/sass/vue-context.scss';

export default {
    components: { VueContext },

    data() {
        return {
            closeOnClick: false,
            items: [
                'Cras justo odio',
                'Dapibus ac facilisis in',
                'Morbi leo risus',
                'Porta ac consectetur ac',
                'Vestibulum at eros',
            ],
        };
    },
};
</script>
