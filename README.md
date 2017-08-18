# vue-context

[![npm version](https://badge.fury.io/js/vue-context.svg)](https://www.npmjs.org/package/vue-context)
[![Coverage Status](https://coveralls.io/repos/github/rawilk/vue-context/badge.svg?branch=master)](https://coveralls.io/github/rawilk/vue-context?branch=master)

A simple yet flexible context menu component for Vue. It is styled for the standard `ul` tag, but any menu template can be used.
The only dependency this package has is Vue, so the majority of styling is up to you, and any package styles for the menu
can easily be overridden.

The menu disappears when you expect by using the `onblur` event and also disappears when clicked on.

## Getting Started

The following instructions will help you get the vue-context menu up and running on your project.

### Installation

Using npm:
```bash
$ npm install vue-context --save
```

## Basic Usage

Import the package and use in your Vue instance, and add a simple method for the click event.

```js
import Vue from 'vue';
import vContext from 'vue-context';

new Vue({
  el: '#app',
  components: {
     vContext
  },
  methods: {
     /**
      * Alert the text of the menu item clicked on.
      *
      * @param text
      */
     onClick(text) {
        alert(`You clicked ${text}!`);
     }
  }
});
```

Add an element to the page that will trigger the context menu to appear, and also add the context menu to the page.

```html
<div id="app">
   
   <div>
      <p @contextmenu.prevent="$refs.menu.open">
         Right click on me
      </p>
   </div>
   
   <v-context ref="menu">
       <ul>
          <li @click="onClick($event.target.innerText)">Option 1</li>
          <li @click="onClick($event.target.innerText)">Option 2</li>
       </ul>
   </v-context>
   
</div>
```

`@contextmenu.prevent` is the event listener needed to open the context menu. It is using `.prevent` as a modifier to prevent the
the default behavior. It has a ref of `menu`, which is what `$refs.menu` is referring to. When each item is clicked on, the text of
the item is sent to the `onClick` method on the Vue instance, which is then shown in an alert.

## Advanced Usage

To pass any data from the `contextmenu` event to your template, you can pass it as the second parameter of `open` and
access it within a [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots) under the `userData` property.

```html
<div id="app">
   
   <p @contextmenu.prevent="$refs.menu.open($event, 'foo')">
       Right click on me
   </p>
   
   <v-context ref="menu">
       <template scope="child">
          <ul>
             <li @click="onClick($event.target.innerText, child.userData)">Option 1</li>
             <li @click="onClick($event.target.innerText, child.userData)">Option 2</li>
          </ul>
       </template>
   </v-context>
   
</div>
```

Now the `onClick` method on the Vue instance has access to any user data passed to it, which in this case this the string `foo`. The
`userData` can also be used to output dynamic content to the context menu.

```js
import Vue from 'vue';
import vContext from 'vue-context';

new Vue({
  el: '#app',
  components: {
     vContext
  },
  methods: {
     /**
      * Alert the text of the menu item clicked on. Console log the data sent from the menu.
      *
      * @param text
      * @param userData
      */
     onClick(text, userData) {
        alert(`You clicked ${text}!`);
        console.log(userData);
     }
  }
});
```

## Credits

vue-context is inspired from [vue-lil-context-menu](https://github.com/timwis/vue-lil-context-menu) 
and [Vue.JS Right Click Menu](http://vuejsexamples.com/vue-js-right-click-menu/). Ultimately vue-context is intended
to provide a simple and lightweight context menu for Vue.
