---
title: Quickstart
sort: 2
---

## Installation

vue-context can be installed via npm:

```bash
npm i vue-context
```

## Usage

Import the component and use it in your app.

```js
import Vue from 'vue';
import VueContext from 'vue-context';

new Vue({
    components: {
        VueContext,
    },

    methods: {
        onClick(text) {
            alert(`You clicked ${text}!`);
        }
    }
}).$mount('#app');
```

For styling, you will need to import the component's styles into your own stylesheets, or into your JavaScript.
It's recommended to import into a stylesheet, however. If you are using sass, you can do the following:

```css
@import '~vue-context/src/sass/vue-context';

// Or
// @import '~vue-context/dist/css/vue-context.css';
```

Now add an element to the page that will trigger the context menu to appear, and also add the context menu to the page.

```html
<div id="app">

    <div>
        <p @contextmenu.prevent="$refs.menu.open">
            Right click on me
        </p>
    </div>

    <vue-context ref="menu">
        <li>
            <a @click.prevent="onClick($event.target.innerText)">Option 1</a>
        </li>
        <li>
            <a @click.prevent="onClick($event.target.innerText)">Option 2</a>
        </li>
    </vue-context>

</div>
```

`@contextmenu.prevent` is the event listener needed to open the context menu. It is using `.prevent` as a modifier
to prevent the default behavior. In this example, the context menu has a ref of `menu`, which is what `$refs.menu` is
referring to. When each item is clicked on, the text of the item is sent to the `onClick` method on the Vue instance,
which is then shown via an alert.

{.tip}
> The context menu defaults to a `<ul>` tag. For best results, make each menu item an `<a>` tag wrapped inside
> of an `<li>` tag.
