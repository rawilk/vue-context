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
		<slot :user-data="userData"></slot>
	</div>
</template>

<script>
	import Vue from 'vue';

    export default {
        data() {
	        return {
	        	show: false,
		        top: null,
		        left: null,
		        userData: null
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
		    	this.show = false;
		    	this.top = null;
		    	this.left = null;
		    	this.userData = null;
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
				    left = event.pageX;

		    	Vue.nextTick(() => {
		    		this.$el.focus();
		    		this.setMenu(top, left);
		    		this.show = true;
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