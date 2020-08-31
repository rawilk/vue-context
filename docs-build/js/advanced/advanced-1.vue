<template>
    <div>
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="demo">
                <li>
                    <a href="#"
                       class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                       :class="{ 'border-t border-gray-200': index > 0 }"
                       v-for="(item, index) in items"
                       :key="index"
                       @contextmenu.prevent="$refs.menu.open($event, { name: item, index })"
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

        <div class="my-4 text-right" v-show="showReset">
            <button type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
                    @click="reset"
            >
                Reset Demo
            </button>
        </div>

        <vue-context ref="menu" v-slot="{ data }">
            <template v-if="data">
                <li>
                    <a @click.prevent="alertName(data.name)">
                        Alert name
                    </a>
                </li>
                <li>
                    <a @click.prevent="remove(data.index)">
                        Delete "{{ data.name }}"
                    </a>
                </li>
            </template>
        </vue-context>
    </div>
</template>

<script>
import VueContext from 'vue-context';
import 'vue-context/src/sass/vue-context.scss';

const items = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
];

export default {
    components: { VueContext },

    computed: {
        showReset() {
            return this.items.length < items.length;
        },
    },

    data() {
        return {
            items: [...items]
        };
    },

    methods: {
        alertName(name) {
            alert(`You clicked on "${name}"!`);
        },

        remove(index) {
            this.$delete(this.items, index);
        },

        reset() {
            this.items = [...items];
        },
    },
};
</script>
