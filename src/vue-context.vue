<template>
    <div class="v-context"
         v-show="show"
         :style="style"
         tabindex="-1"
         v-on-clickaway="close"
         @click="onClick"
         @contextmenu.capture.prevent
    >
        <slot :data="data"></slot>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],

        props: {
            closeOnClick: {
                type: Boolean,
                default: true
            },
            closeOnScroll: {
                type: Boolean,
                default: true
            }
        },

        computed: {
            style() {
                return this.show
                    ? { top: `${this.top}px`, left: `${this.left}px` }
                    : null;
            }
        },

        data() {
            return {
                top: null,
                left: null,
                show: false,
                data: null
            };
        },

        beforeDestroy() {
            if (this.closeOnScroll) {
                this.removeScrollEventListener();
            }
        },

        methods: {
            addScrollEventListener() {
                window.addEventListener('scroll', this.close);
            },

            close(emit = true) {
                if (! this.show) {
                    return;
                }

                this.top = null;
                this.left = null;
                this.data = null;
                this.show = false;

                if (this.closeOnScroll) {
                    this.removeScrollEventListener();
                }

                if (emit) {
                    this.$emit('close');
                }
            },

            onClick() {
                if (this.closeOnClick) {
                    this.close(false);
                }
            },

            open(event, data) {
                this.data = data;
                this.show = true;

                this.$nextTick(() => {
                    this.positionMenu(event.clientY, event.clientX);
                    this.$el.focus();

                    if (this.closeOnScroll) {
                        this.addScrollEventListener();
                    }

                    this.$emit('open', event, this.data, this.top, this.left);
                });
            },

            positionMenu(top, left) {
                const largestHeight = window.innerHeight - this.$el.offsetHeight - 25;
                const largestWidth = window.innerWidth - this.$el.offsetWidth - 25;

                if (top > largestHeight) {
                    top = largestHeight;
                }

                if (left > largestWidth) {
                    left = largestWidth;
                }

                this.top = top;
                this.left = left;
            },

            removeScrollEventListener() {
                window.removeEventListener('scroll', this.close);
            }
        },

        watch: {
            closeOnScroll(closeOnScroll, oldValue) {
                if (closeOnScroll === oldValue) {
                    return;
                }

                if (closeOnScroll && this.show) {
                    this.addScrollEventListener();
                } else {
                    this.removeScrollEventListener();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $blue600: #1e88e5;
    $gray74: #bdbdbd;
    $gray93: #ededed;
    $gray98: #fafafa;

    .v-context {
        background: $gray98;
        border: 1px solid $gray74;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        display: block;
        margin: 0;
        padding: 0;
        position: fixed;
        width: 250px;
        z-index: 99999;

        ul {
            list-style: none;
            padding: 10px 0;
            margin: 0;
            font-size: 12px;
            font-weight: 600;

            li {
                margin: 0;
                padding: 10px 35px;
                cursor: pointer;

                &:hover {
                    background: $blue600;
                    color: $gray98;
                }
            }
        }
    }
</style>
