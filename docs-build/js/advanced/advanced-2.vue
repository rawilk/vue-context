<template>
    <div class="mt-5">
        <div class="flex flex-wrap">
            <div class="color-box"
                 :class="{ selected: hasColor(color.hex) }"
                 v-for="(color, index) in colors"
                 :key="index"
                 :style="{ 'background-color': color.hex }"
                 @contextmenu.prevent="$refs.menu.open($event, color)"
            >
                &nbsp;
            </div>
        </div>

        <h5 class="my-4">
            Selected colors:
        </h5>
        <code class="mb-3">{{ selectedColors }}</code>

        <vue-context ref="menu" v-slot="{ data: color }">
            <li v-if="color">
                <a href="#" @click.prevent="toggle(color)">
                    {{ hasColor(color.hex) ? 'Remove Color' : 'Select Color' }}
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
            colors: [
                { name: 'red', hex: '#f44336' },
                { name: 'blue', hex: '#2196F3' },
                { name: 'cyan', hex: '#00BCD4' },
                { name: 'green', hex: '#4CAF50' },
                { name: 'orange', hex: '#FF9800' },
            ],
            selectedColors: [],
        };
    },

    methods: {
        colorIndex(hex) {
            return this.selectedColors.findIndex(color => color.hex === hex);
        },

        hasColor(hex) {
            return this.colorIndex(hex) > -1;
        },

        toggle(color) {
            const index = this.colorIndex(color.hex);

            if (index > -1) {
                this.$delete(this.selectedColors, index);
            } else {
                this.selectedColors.push(color);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
    .color-box {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        border-radius: 4px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        opacity: .6;

        &.selected {
            opacity: 1;
        }

        &:last-child {
            margin-right: 0;
        }
    }
</style>
