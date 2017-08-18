<template>
	<div
		v-show="show"
		class="v-context"
		:style="style"
		tabindex="-1"
		@blur="close"
		@click="close"
		@contextmenu.capture.prevent
	>
		<slot :userData="userData"></slot>
	</div>
</template>

<script>
	import Vue from 'vue';

    export default {
        data() {
	        return {
		        top: null,
		        left: null,
		        userData: null,
		        show: false
	        };
        },
	    computed: {
		    /**
		     * Get the position of the context menu.
		     */
		    style() {
		    	return this.show
			        ? { top: `${this.top}px`, left: `${this.left}px` }
			        : {};
		    }
	    },
	    methods: {
		    /**
		     * Close the menu.
		     */
		    close() {
		    	this.top = null;
		    	this.left = null;
		    	this.userData = null;
		    	this.show = false;
		    },

		    /**
		     * Open the menu.
		     *
		     * @param event
		     * @param userData
		     */
		    open(event, userData) {
		    	this.userData = userData;

		    	let top = event.clientY,
				    left = event.clientX;

		    	this.show = true;

		    	Vue.nextTick(() => {
				    this.setMenu(top, left);
				    this.$el.focus();
			    });
		    },

		    /**
		     * Set menu coordinates.
		     *
		     * @param top
		     * @param left
		     */
		    setMenu(top, left) {
		    	let largestHeight = window.innerHeight - this.$el.offsetHeight - 25;
		    	let largestWidth = window.innerWidth - this.$el.offsetWidth - 25;

		    	if (top > largestHeight) {
		    		top = largestHeight;
			    }

			    if (left > largestWidth) {
		    		left = largestWidth;
			    }

			    this.top = top;
		    	this.left = left;
		    }
	    }
    }
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

		& ul {
			list-style: none;
			padding-left: 0;
			padding-top: 10px;
			padding-bottom: 10px;
			margin: 0;
			font-size: 12px;
			font-weight: 600;

			& li {
				margin: 0;
				border-bottom: $gray93;
				padding: 10px 35px;
				cursor: pointer;

				&:last-child {
					border-bottom: none;
				}

				&:hover {
					background: $blue600;
					color: $gray98;
				}
			}
		}
	}
</style>