---
title: Introduction
sort: 1
---

## Introduction

`vue-context` provides a simple yet flexible context menu for Vue. It is styled for the standard `<ul>` tag, but any menu
template can be used. The menu is lightweight with its only dependency being `vue-clickaway`. The menu has some basic
styles applied to it, but they can be easily overridden by your own styles.

The menu disappears when you expect by utilizing `vue-clickaway` and it also optionally disappears when clicked on.

![vue-context screenshot](../images/screenshot.jpg)

By default, the menu is set up to use a `<ul>` tag for the menu, which is given the attribute `role="menu"` automatically.
The component will also automatically apply the attribute `role="menuitem"` to each menu item when the context menu is opened.

## License

`vue-context` uses the MIT License (MIT). Please see the [license file](https://github.com/rawilk/vue-context/blob/master/LICENSE) for more information.
