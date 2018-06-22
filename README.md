# vue-context

[![npm version](https://img.shields.io/npm/v/vue-context.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-context)
[![npm downloads](https://img.shields.io/npm/dt/vue-context.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-context)
[![GitHub issues](https://img.shields.io/github/issues/rawilk/vue-context.svg?style=for-the-badge)](https://github.com/rawilk/vue-context/issues)
[![GitHub stars](https://img.shields.io/github/stars/rawilk/vue-context.svg?style=for-the-badge)](https://github.com/rawilk/vue-context/stargazers)
[![VueJS version](https://img.shields.io/badge/vue.js-2.x-green.svg?style=for-the-badge)](https://vuejs.org)

A simple yet flexible context menu for Vue. It is styled for the standard `ul` tag,
but any menu template can be used. The only dependency this package has is Vue,
so the majority of styling is up to you, and any package styles for the menu
can easily be overridden.

The menu disappears when you expect by using the `onblur` event and it also
disappears when clicked on.

![Screenshot](screenshot.png)

## Demo

A demo of `vue-context` can be found here: https://rawilk.github.io/vue-context

## Note
The API has changed. Check [v2.0.1 documentation](https://github.com/rawilk/vue-context/blob/master/docs/2.0.1.md) 
if you use the old version.

## Getting Started

The following instructions will help you get the vue-context menu up and running on
your project.

### Installation

Using npm:
```bash
$ npm install vue-context --save
```

## Basic Usage

Import the package and use it in your Vue instance, and add a simple method
for the click event.

```js
import Vue from 'vue';
import { VueContext } from 'vue-context';

new Vue({
    components: {
        VueContext
    },
    
    methods: {
        /**
         * Alert the text of the menu item that was clicked on.
         * 
         * @param {string} text
         */
        onClick (text) {
            alert(`You clicked ${text}!`);
        }
    }
}).$mount('#app');
```

Add an element to the page that will trigger the context menu to appear,
and also add the context menu to the page.

```html
<div id="app">
    
    <div>
        <p @contextmenu.prevent="$refs.menu.open">
            Right click on me
        </p>
    </div>
    
    <vue-context ref="menu">
        <ul>
            <li @click="onClick($event.target.innerText)">Option 1</li>
            <li @click="onClick($event.target.innerText)">Option 2</li>
        </ul>
    </vue-context>
    
</div>
```

`@contextmenu.prevent` is the event listener needed to open the context menu. It is using
`.prevent` as a modifier to prevent the default behavior. It has a ref of `menu`, which
is what `$refs.menu` is referring to. When each item is clicked on, the text of the item
is sent to the `onClick` method on the Vue instance, which is then shown in an alert.

## Advanced Usage

To pass any data from the `contextmenu` event to your template, you can pass it as the second
parameter of `open` and access it within a [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots) 
under the `data` property. `$event` must be passed as the first parameter,
otherwise the context menu will not function properly.

```html
<div id="app">
    
    <p @contextmenu.prevent="$refs.menu.open($event, { foo: 'bar' })">
        Right click on me
    </p>
    
    <vue-context ref="menu">
        <ul slot-scope="child">
            <li @click="onClick($event.target.innerText, child.data)">Option 1</li>
            <li @click="onClick($event.target.innerText, child.data)">Option 2</li>
        </ul>
    </vue-context>
    
</div>
```

Now the `onClick` method on the Vue instance has access to any user data passed to it,
which in this case is an object with a property named `foo`. The `data` slot scope
can also be used to output dynamic content to the context menu.

```js
import Vue from 'vue';
import { VueContext } from 'vue-context';

new Vue({
    components: {
        VueContext
    },
    
    methods: {
        /**
         * Alert the text of the menu item that was clicked on.
         * Console log the data sent from the menu.
         * 
         * @param {string} text
         * @param {object} data
         */
        onClick (text, data) {
            alert(`You clicked ${text}!`);
            console.log(data);
            // => { foo: 'bar' }
        }
    }
}).$mount('#app');
```

## Props

| Property | Type | Default | Description
| -------- | ---- | ------- | -----------
| `closeOnScroll` | Boolean | `true` | If set to true, context menu will automatically close on window scroll.

## Credits

vue-context is inspired from [vue-lil-context-menu](https://github.com/timwis/vue-lil-context-menu)
and [Vue.JS Right Click Menu](http://vuejsexamples.com/vue-js-right-click-menu/). Ultimately
vue-context is intended to provide a simple and lightweight context menu for Vue.

## License

The MIT License (MIT). Please see the [License file](https://github.com/rawilk/vue-context/blob/master/LICENSE) for more information.