import { directive as onClickaway } from 'vue-clickaway/index';
import { eventOff, eventOn, filterVisible, isArray, keyCodes, selectAll, setAttr } from './utils';
import { normalizeSlot } from './normalize-slot';
import '../sass/vue-context.scss';

export default {
    directives: {
        onClickaway
    },

    props: {
        closeOnClick: {
            type: Boolean,
            default: true
        },
        closeOnScroll: {
            type: Boolean,
            default: true
        },
        lazy: {
            type: Boolean,
            default: false
        },
        itemSelector: {
            type: [String, Array],
            default: () => ['.v-context-item', '.v-context > li > a']
        },
        role: {
            type: String,
            default: 'menu'
        },
        tag: {
            type: String,
            default: 'ul'
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
            data: null,
            localItemSelector: this.itemSelector
        };
    },

    created() {
        if (isArray(this.localItemSelector)) {
            this.localItemSelector = this.localItemSelector
                .map(selector => `${selector}:not(.disabled):not([disabled])`)
                .join(', ');
        }
    },

    beforeDestroy() {
        if (this.closeOnScroll) {
            this.removeScrollEventListener();
        }
    },

    methods: {
        addScrollEventListener() {
            eventOn(window, 'scroll', this.close);
        },

        close(emit = true) {
            if (! this.show) {
                return;
            }

            this.resetData();

            if (this.closeOnScroll) {
                this.removeScrollEventListener();
            }

            if (emit) {
                this.$emit('close');
            }
        },

        focusItem(index, items) {
            const el = items.find((el, idx) => idx === index);
            if (el && el.focus) {
                el.focus();
            }
        },

        focusNext(event, up) {
            if (! this.show) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            this.$nextTick(() => {
                const items = this.getItems();
                if (items.length < 1) {
                    return;
                }

                let index = items.indexOf(event.target);
                if (up && index > 0) {
                    index--;
                } else if (! up && index < items.length - 1) {
                    index++;
                }

                if (index < 0) {
                    index = 0;
                }

                this.focusItem(index, items);
            });
        },

        getItems() {
            return filterVisible(selectAll(this.localItemSelector, this.$el));
        },

        onClick() {
            this.close(false);
        },

        onKeydown(event) {
            const key = event.keyCode;

            if (key === keyCodes.ESC) {
                // Close on esc
                this.close();
            } else if (key === keyCodes.DOWN) {
                // Down arrow
                this.focusNext(event, false);
            } else if (key === keyCodes.UP) {
                // Up arrow
                this.focusNext(event, true);
            }
        },

        open(event, data) {
            this.data = data;
            this.show = true;

            this.$nextTick(() => {
                this.positionMenu(event.clientY, event.clientX);
                this.$el.focus();
                this.setItemRoles();

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
            eventOff(window, 'scroll', this.close);
        },

        resetData() {
            this.top = null;
            this.left = null;
            this.data = null;
            this.show = false;
        },

        setItemRoles() {
            // Add role="menuitem" and tabindex="-1" to all items
            selectAll(this.localItemSelector, this.$el)
                .forEach(el => {
                    setAttr(el, 'role', 'menuitem');
                    setAttr(el, 'tabindex', '-1');
                });
        }
    },

    watch: {
        closeOnScroll(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            if (newValue && this.show) {
                this.addScrollEventListener();
            } else {
                this.removeScrollEventListener();
            }
        },
    },

    render(h) {
        if (this.lazy && ! this.show) {
            return h(false);
        }

        // Only register the events we need
        const on = {
            // `!` modifier for capture
            '!contextmenu': e => {
                e.preventDefault();
            },
            keydown: this.onKeydown // up, down, esc
        };

        if (this.closeOnClick) {
            on.click = this.onClick;
        }

        // Only register the directives we need
        const directives = [
            {
                name: 'on-clickaway',
                value: this.close,
                rawName: 'v-on-clickaway'
            }
        ];

        if (! this.lazy) {
            directives.push({
                name: 'show',
                value: this.show,
                rawName: 'v-show',
                expression: 'show'
            });
        }

        return h(
            this.tag,
            {
                staticClass: 'v-context',
                style: this.style,
                attrs: {
                    tabindex: '-1',
                    role: this.role,
                    'aria-hidden': this.lazy ? null : String(! this.show)
                },
                on,
                directives
            },
            [normalizeSlot('default', { data: this.data }, this.$scopedSlots, this.$slots)]
        );
    }
};
