---
title: Basic Usage
sort: 1
---

Using the menu requires very little setup as shown below.

To use the context menu, you need to import it into your component and then create a trigger element to open the
context menu on.

```html
<template>
    <div>
        <p @contextmenu.prevent="$refs.menu.open">
            Right click on me
        </p>

        <vue-context ref="menu">
            <li>
                <a @click.prevent="onClick($event.target.innerText)">
                    Option 1
                </a>
            </li>
            <li>
                <a @click.prevent="onClick($event.target.innerText)">
                    Option 2
                </a>
            </li>
        </vue-context>
    </div>
</template>

<script>
    import VueContext from 'vue-context';
    import 'vue-context/src/sass/vue-context.scss'; // Alternatively import into a stylesheet instead

    export default {
        components: { VueContext },

        methods: {
            onClick(text) {
                alert(`You clicked "${text}"!`);
            },
        },
    };
</script>
```
