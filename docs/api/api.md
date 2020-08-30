---
title: Vue-Context
sort: 1
---

## Slots

| Slot | Description |
| --- | --- |
| default | The default slot also serves as a scoped slot which receives any data passed to the menu |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `closeOnClick` | Boolean | `true` | If set to `false`, context menu will not automatically close when clicked on |
| `closeOnScroll` | Boolean | `true` | If set to `true`, context menu will automatically close on window scroll |
| `lazy` | Boolean | `false` | If set to `true`, context menu will be rendered with a `v-if` instead of `v-show` |
| `itemSelector` | Array, String | `['.v-context-item', '.v-context > li > a']` | The selector of the menu items the menu will use to look for to set accessibility attributes and for keyboard navigation. |
| `role` | String | `menu` | Used for the `role` attribute on the context menu |
| `subMenuOffset` | Number | `10` | Specify the offset in pixels of the submenus |
| `tag` | String | `ul` | Used as the root element of the context menu |
| `heightOffset` | Number | `25` | Specify distance from the menu to top/bottom of screen |
| `widthOffset` | Number | `25` | Specify distance from menu to left of screen |
| `useScrollHeight` | Boolean | `false` | Use the menu's scroll height instead of offset height to calculate positioning |
| `useScrollWidth` | Boolean | `false` | Use the menu's scroll width instead of offset width to calculate positioning |

## Events

| Event | Arguments | Description |
| --- | --- | --- |
| `close` | none | Emits when the context menu is closed |
| `open` | `event`, `data`, `top`, `left` | Emits when the menu is opened. the event, context menu data, top and left position are all sent through as parameters |

[View source](https://github.com/rawilk/vue-context/blob/master/src/js/vue-context.vue)
